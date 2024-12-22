import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ProductContext";

export default function ProductPagination() {
  const { count, setPage } = useProduct();
  const handlePage = (p, n) => setPage(n);

  return (
    <div
      style={{
        paddingBlock: "25px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pagination onChange={handlePage} count={count} color="primary" />{" "}
    </div>
  );
}
