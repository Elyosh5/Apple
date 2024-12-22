import React, { useEffect } from "react";

import scss from "./AccessoriesPage.module.scss";
import { useProduct } from "../../../../context/ProductContext";
import ProductCard from "../../ProductCard";
import PaginationProduct from "../../PaginationProduct";
const AccessoriesPage = () => {
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
                (item) =>
                  item.props.item.category.toLowerCase() === "accessories"
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

export default AccessoriesPage;
