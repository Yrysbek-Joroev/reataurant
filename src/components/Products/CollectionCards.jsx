import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../../contexts/CartContextProvider";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useFavorite } from "../../contexts/FavoriteContextProvider";

export default function CollectionCard({ item }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToFavorites, checkProductInFavorites } = useFavorite();

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
      <CardMedia
        sx={{ height: 420 }}
        image={isHovered ? item.picture2 : item.picture1}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        title="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ fontFamily: "inherit", fontSize: "17px" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.name}
        </Typography>
        <Typography
          sx={{ fontSize: "20px" }}
          variant="body2"
          color="text.secondary"
        >
          {item.price}
        </Typography>
      </CardContent>
      <IconButton onClick={() => addProductToCart(item)}>
        <AddShoppingCartIcon
          color={checkProductInCart(item.id) ? "primary" : undefined}
        />
      </IconButton>
      <IconButton onClick={() => addProductToFavorites(item)}>
        <BookmarkBorderIcon
          color={checkProductInFavorites(item.id) ? "primary" : undefined}
        />
      </IconButton>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
