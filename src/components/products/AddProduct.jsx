import React from "react";
import Form from "../form/Form";
import { Container } from "@mui/material";

const AddProduct = () => {
  return (
    <Container>
      <Form isEdit={false} />
    </Container>
  );
};

export default AddProduct;
