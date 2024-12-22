import React from "react";
import { Container } from "@mui/material";
import Form from "../form/Form";

const EditProduct = () => {
  return (
    <Container>
      <Form isEdit={true} />
    </Container>
  );
};

export default EditProduct;
