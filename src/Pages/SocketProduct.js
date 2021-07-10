import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ProductList from "./ProductList";
import ProductImage from "./ProductImage";
import ProductDetail from "./ProductDetail";
import Navbar from "../Component/Navbar";


const images = [
  "https://images-na.ssl-images-amazon.com/images/I/71bdE2zv5%2BS._AC_SL1500_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51biqZP8%2B2L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51uEwkqjZTL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71xtNDyvcYL._AC_UL160_.jpg",
  "https://m.media-amazon.com/images/I/71E5zB1qbIL.jpg",
];

const details = {
  title: "Samsung",
  description: "Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature literature, discovered the undoubtable source",
  price: "120000",
  category: "Phone"
};

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#dedede",
    padding: "20px",
    // maxWidth: 1100,
    margin: "0 auto",
  },

}));

const SocketProduct = () => {
  const classes = useStyles();

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Grid container spacing={2} className={classes.bg}>
        <Grid item sm={1}>
          <ProductList images={images} onSelect={setSelectedImage} selectedImage={selectedImage} />
        </Grid>
        <Grid item sm={5}>
          <ProductImage src={images[selectedImage]} />
        </Grid>
        <Grid item sm={5}>
          <ProductDetail {...details} />
        </Grid>
      </Grid>
    </>
  );
};

export default SocketProduct;