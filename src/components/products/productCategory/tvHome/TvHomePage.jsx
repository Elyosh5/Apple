import React, { useEffect } from "react";
import scss from "./TvHomePage.module.scss";
import { useProduct } from "../../../../context/ProductContext";
import ProductCard from "../../ProductCard";
import PaginationProduct from "../../PaginationProduct";
const TvHomePage = () => {
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
              .filter((item) => item.props.item.category.toLowerCase() === "tv")
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <PaginationProduct />
      </div>
    </div>
  );
};

export default TvHomePage;
