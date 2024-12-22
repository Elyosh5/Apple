import React, { useEffect } from "react";
import scss from "./DetailsPage.module.scss";
import { useProduct } from "../context/ProductContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const DetailsPage = () => {
  const { getOneProduct, oneProduct } = useProduct();
  const { addProductToCard, checkProductInCart } = useCart();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  console.log(oneProduct);

  return (
    <div className={scss.details}>
      <div className={scss.content}>
        {oneProduct ? (
          <Card sx={{ maxWidth: "70%", borderRadius: "20px" }}>
            <CardActionArea sx={{ height: 500, display: "flex", p: 2 }}>
              <CardMedia
                sx={{ width: 500, objectFit: "contain" }}
                component="img"
                height="280"
                image={oneProduct.image}
                alt={oneProduct.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {oneProduct.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ color: "text.secondary", lineHeight: "27px" }}
                >
                  {oneProduct.description}
                </Typography>
                <CardContent sx={{ padding: "20px 0" }}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {oneProduct.price}$
                  </Typography>
                </CardContent>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {checkProductInCart(oneProduct._id) ? (
                <>
                  <Button size="small" color="primary">
                    Add To Product
                  </Button>
                  <Button size="small" color="primary">
                    Continue shopping
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => addProductToCard(oneProduct)}
                  size="small"
                  color="primary"
                >
                  Add To Product
                </Button>
              )}
            </CardActions>
          </Card>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
