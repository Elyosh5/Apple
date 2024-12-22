import React from "react";
import CartTable from "../components/cart/CartTable";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCart();

  if (!cart || !cart.products) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {cart.products.length > 0 ? (
        <CartTable cart={cart} />
      ) : (
        <h1>Your cart is empty.</h1>
      )}
    </div>
  );
};

export default CartPage;
