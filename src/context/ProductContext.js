import React, { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { API } from "../helpers/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  product: [],
  oneProduct: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function readProduct() {
    try {
      let { data } = await axios(API);
      dispatch({
        type: "GET_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  }

  //? PAGINATION

  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const count = Math.ceil(state.product.length / itemPerPage);

  function handlePage() {
    const start = (page - 1) * itemPerPage;
    const end = start + itemPerPage;
    return state.product.slice(start, end);
  }

  //? PAGINATION

  //? SEARCH

  function searchProduct(value) {
    if (!value) return readProduct();
    let result = state.product.filter((el) =>
      el.title.toLowerCase().includes(value.toLowerCase())
    );
    dispatch({
      type: "GET_PRODUCT",
      payload: result,
    });
  }

  //? SEARCH

  //? Pricing

  //?

  const values = {
    addProduct,
    readProduct,
    getOneProduct,
    product: state.product,
    oneProduct: state.oneProduct,
    count,
    setPage,
    handlePage,
    deleteProduct,
    searchProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
