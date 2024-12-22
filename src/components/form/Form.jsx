import React, { useState } from "react";
import scss from "./Form.module.scss";
import { Button, FormControl, TextField } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

const initialObject = {
  title: "",
  image: "",
  price: "",
  description: "",
  category: "",
};

const Form = ({ isEdit }) => {
  const { addProduct } = useProduct();
  const [inputValues, setInputValues] = useState(initialObject);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  console.log(inputValues);

  const handlerAdd = () => {
    addProduct(inputValues);
    setInputValues(initialObject);
  };

  return (
    <div className={scss.form}>
      <div className={scss.content}>
        <FormControl className={scss.form_control} color="success">
          <TextField
            onChange={handleInp}
            value={inputValues.title}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="title"
            variant="outlined"
            name="title"
            fullWidth
          />
          <TextField
            onChange={handleInp}
            value={inputValues.image}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="image"
            variant="outlined"
            name="image"
            fullWidth
          />
          <TextField
            onChange={handleInp}
            value={inputValues.price}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="price"
            variant="outlined"
            name="price"
            fullWidth
          />
          <TextField
            onChange={handleInp}
            value={inputValues.description}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="description"
            variant="outlined"
            name="description"
            fullWidth
          />
          <TextField
            onChange={handleInp}
            value={inputValues.category}
            inputProps={{
              style: {
                padding: 8,
                fontSize: "14px",
              },
            }}
            placeholder="category"
            variant="outlined"
            name="category"
            fullWidth
          />
          {isEdit ? (
            <Button className={scss.btn} variant="contained">
              save
            </Button>
          ) : (
            <Button
              onClick={handlerAdd}
              className={scss.btn}
              variant="contained"
            >
              create
            </Button>
          )}
        </FormControl>
      </div>
    </div>
  );
};

export default Form;
