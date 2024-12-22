import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/details/${item._id}`)}
      sx={{
        maxWidth: 380,
        width: "100%",
        textAlign: "center",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography
          sx={{ textAlign: "start" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.title}
        </Typography>
      </CardContent>
      <img
        style={{ maxWidth: "300px", width: "100%" }}
        src={item.image}
        alt=""
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {item.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProduct(item._id)} size="small">
          delete
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
