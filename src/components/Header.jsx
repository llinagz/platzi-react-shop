import React, { useState } from "react";
import Menu from "@components/Menu";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import "@styles/Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
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
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
