import React, { createContext, useContext, useEffect, useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/functions";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function getProductFromCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  useEffect(() => {
    getProductFromCart();
  }, []);

  function addProductToCard(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    cart.products.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductFromCart();
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let obj = cart.products.find((item) => item.item._id === id);
      return obj ? true : false;
    }
  }

  function changeProductCount(count, id) {
    if (count < 1) {
      alert("error");
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item._id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductFromCart();
  }

  function deleteProductFromCard(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((item) => item.item._id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductFromCart();
  }

  const values = {
    addProductToCard,
    checkProductInCart,
    changeProductCount,
    deleteProductFromCard,
    cart: state.cart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContext;
