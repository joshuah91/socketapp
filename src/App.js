import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SocketProduct from "../src/Pages/SocketProduct";
import Paystack from "../src/Pages/Paystack";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SocketProduct} />
        <Route path="/Paystack" exact component={Paystack} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
