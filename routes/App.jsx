import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/containers/Layout";
import Login from "../src/pages/Login";
import RecoveryPassword from "../src/pages/PasswordRecovery";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";
import SendEmail from "../src/pages/SendEmail";
import NewPassword from "../src/pages/NewPassword";
import MyAccount from "../src/pages/MyAccount";
import CreateAccount from "../src/pages/CreateAccount";
import Checkout from "../src/pages/Checkout";
import Orders from "../src/pages/Orders";

import "../src/styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
