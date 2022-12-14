import React, { useState, useContext } from "react";
import Menu from "@components/Menu";
import menu from "@icons/icon_menu.svg";
import MyOrder from "../containers/MyOrder";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import "@styles/Header.scss";

const Header = () => {
  const [toggleEmail, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggleEmail);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">Todo</a>
          </li>
          <li>
            <a href="/">Ropa</a>
          </li>
          <li>
            <a href="/">Electrónica</a>
          </li>
          <li>
            <a href="/">Abalorios</a>
          </li>
          <li>
            <a href="/">Juguetes</a>
          </li>
          <li>
            <a href="/">Otros</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            hola@javierllinares.eu
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleEmail && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
