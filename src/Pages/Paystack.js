import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { PaystackButton } from "react-paystack"

const useStyle = makeStyles((theme) => ({
  paymentForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    margin: "5% auto",
    width: "318px",
    height: "430px",
    backgroundColor: "#84a17d",
    boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.5)",
    padding: "20px 20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  formLabel: {
    textAlign: "left",
    marginLeft: "0px",
    color: "white",
    fontSize: "13px",
    marginBottom: "5px",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
  },
  formInput: {
    backgroundColor: "transparent",
    border: "1px solid #cecece",
    borderRadius: "5px",
    color: "#e0eafc",
    height: "35px",
    marginLeft: "0px",
    paddingLeft: "10px",
    cursor: "cursor",
    "&:focus": {
      backgroundColor: "transparent",
      outline: "none",
    },
  },
  PaystackButton: {
    cursor: "pointer",
    textAlign: "center",
    fontSize: "10px",
    letterSpacing: "0.1rem",
    textTransform: "uppercase",
    backgroundColor: "#bfbfbf",
    fontWeight: "bold",
    color: "#e0eafc",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    height: "45px",
    marginTop: "40px",
    "&:hover": {
      backgroundColor: "#dadada",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

const Paystack = ({location}) => {
  let amount = location.param;
  const publicKey = "pk_test_4b7b811ae9b5f4496487619a7c6e348ab76f6341"
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => {
      setEmail("")
      setName("")
      setPhone("")
    },
    onClose: () => alert("Wait! You need this product, don't go!!!"),
  }

  const classes = useStyle();
  return (
    <>
      <div className={classes.paymentForm}>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Email</label>
            <input
              className={classes.formInput}
              type="text" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Name</label>
          <input
            className={classes.formInput}
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Phone</label>
          <input 
            className={classes.formInput}
            type="text" 
            id="phone" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Amount(2 zeros added for kobo)</label>
          <input
            className={classes.formInput}
            type="text" 
            id="amount" 
            value={amount}
            />
        </div>
        <PaystackButton className={classes.PaystackButton}{...componentProps} />
      </div>
    </>
  );
};

export default Paystack;

