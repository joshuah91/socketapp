import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageDiv: {
    border: "1px solid #84a17d",
    borderRadius: "8px",
  },
  image: {
    width: "90%",
    padding: "10px",
    height: "80vh",
    margin: "20px",
  }, 
}));

const ProductImage = ({ src }) => {
  const classes = useStyles();

  return (
    <div className={classes.imageDiv}>
      <img alt="phone" src={src} className={classes.image} />
    </div>
  );
};

export default ProductImage;