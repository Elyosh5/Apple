import { Pagination } from "@mui/material";
import React from "react";
import { useProduct } from "../../context/ProductContext";

const PaginationProduct = () => {
  const { count, setPage } = useProduct();

  const handlerChange = (p, n) => setPage(n);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBlock: "25px",
      }}
    >
      <Pagination onChange={handlerChange} count={count} shape="rounded" />
    </div>
  );
};

export default PaginationProduct;
