import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "../../context/CartContext";

const CartTable = ({ cart }) => {
  const { deleteProductFromCard, changeProductCount } = useCart();
  console.log(cart);

  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {cart.products.map((el, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              marginTop: "50px",
              marginBottom: "50px",
              width: "570px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                m: 3,
              }}
            >
              <Typography component="div" variant="h5">
                {el.item.title}
                <br />
              </Typography>
              <Select
                onChange={(e) =>
                  changeProductCount(e.target.value, el.item._id)
                }
                labelId="custom-select-label"
                id="custom-select"
                sx={{ width: "150px" }}
                value={el.count}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={5}>6</MenuItem>
              </Select>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", m: 3 }}>
              <Typography sx={{ fontSize: "25px" }}>
                {el.item.price}$
              </Typography>
              <Typography sx={{ fontSize: "25px" }}>{el.subPrice}$</Typography>
              <CardMedia
                image={el.item.image}
                component="img"
                sx={{ width: 250, objectFit: "cover", height: "220px" }}
                alt="Product-Image"
              />
              <Button
                onClick={() => deleteProductFromCard(el.item._id)}
                variant="contained"
                size="medium"
                sx={{ m: "5 0" }}
              >
                Remove
              </Button>
            </Box>
          </Card>
        ))}
      </Container>
      <Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            p: "30px 0",
          }}
        >
          <Typography variant="h4">TotalPrice: {cart.totalPrice}$</Typography>
          <Button variant="contained">Buy</Button>
        </Container>
      </Box>
    </Box>
  );
};

export default CartTable;
