import React from "react";
import { Grid, makeStyles, Typography, Divider, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  detailGrid: {
    display: "flex",
    flexDirection: "column",
    height: "87.6vh",
    border: "1px solid #84a17d",
    padding: "12px",
    borderRadius: "8px",
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#84a17d",
    width: "100%",
    borderRadius: "8px",
    padding: "12px",
    "&:hover": {
      backgroundColor: "#dadada",
    },
    "&:focus": {
      outline: "none",
    },
  },
  category: {
    fontWeight: "700",
    border: "1px solid #84a17d",
    borderRadius: "4px",
    padding: "12px",
    backgroundColor: "#84a17d",
    color: "white",
  },
}));

const ProductDetail = ({ title, description, price, category }) => {
  let newPrice = price * 100;
  const link = {
    pathname: "/Paystack", 
    param: newPrice
  };
  const classes = useStyles();

  return (
    <Grid container className={classes.detailGrid}>
      <Typography variant="subtitle1" className={classes.category}>{category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4" style={{ color: "#84a17d", padding: "12px" }}>{title}</Typography>
        <Typography variant="subtitle1" style={{ color: "#84a17d", padding: "12px" }}>{description}</Typography>
        <Typography variant="h5" style={{ color: "#84a17d", padding: "12px" }}>NGN{price}</Typography>
      </Box>
      <Button variant="contained" color="primary" className={classes.button}>
        <Link to={link}
        style={{ textDecoration: "none", color: "#fff", width: "100%" }}>Purchase</Link></Button>
    </Grid>
  );
};

export default ProductDetail;