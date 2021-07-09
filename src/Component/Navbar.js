import React from "react";
import { Link } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import logo from "../Component/logo.jpg";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  navWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#C04000",
  },
  logo: {
    width: "40px",
    margin: "5px",
    marginLeft: "70px",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    width: "75%",
    justifyContent: "flex-end",
    listStyleType: "none",
    padding: "5px",
  },
  list: {
    textDecoration: "none",
    margin: "5px",
    padding: "5px",
    fontSize: "15px",
    color: "whitesmoke",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.navWrapper}>
        <Link to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>

        <ul className={classes.right}>
          
          <li><Link to="/" className={classes.list}>Shop</Link></li>
          <li><Link to="/" className={classes.list}><ShoppingCartIcon /></Link></li>
        </ul>
    </Grid>
  );
};

export default Navbar;