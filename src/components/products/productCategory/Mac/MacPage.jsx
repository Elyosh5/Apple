import React, { useEffect } from "react";
import { useProduct } from "../../../../context/ProductContext";
import ProductCard from "../../ProductCard";
import scss from "./MacPage.module.scss";
import PaginationProduct from "../../PaginationProduct";

const MacPage = () => {
  const { readProduct, handlePage, product } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.list}>
      <div className="container">
        <div className={scss.content}>
          {product ? (
            handlePage()
              .map((item, index) => <ProductCard item={item} key={index} />)
              .filter(
                (item) => item.props.item.category.toLowerCase() === "mac"
              )
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <PaginationProduct />
      </div>
    </div>
  );
};

export default MacPage;
