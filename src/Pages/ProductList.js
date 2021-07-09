import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageGrid: {
    display: "flex",
    flexDirection: "column",
    marginTop: "-3px",
  },
  img: {
    height: 100,
    borderRadius: "8px",
    padding: "8px",
    margin: "5px",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #FFA500",
    },
  },
}));

const ProductList = ({ images, onSelect, selectedImage }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.imageGrid}>
      {images.map((image, index) => (
        <img src={image}
        alt="phone"
        onClick={() => onSelect(index)} 
        className={classes.img}
        style={{ border: index === selectedImage ? "1px solid #000" : "1px solid #FF4500" }} 
        />
      ))}
    </Grid>
  );
};

export default ProductList;