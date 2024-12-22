import React, { useEffect } from "react";
import scss from "./ProductList.module.scss";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import PaginationProduct from "./PaginationProduct";
import ProductPricing from "./ProductPricing";

const ProductList = () => {
  const { readProduct, product, handlePage } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.list}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.pricing}>
            <ProductPricing />
          </div>
          {product ? (
            handlePage().map((item, index) => (
              <ProductCard item={item} key={index} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <PaginationProduct />
      </div>
    </div>
  );
};

export default ProductList;
