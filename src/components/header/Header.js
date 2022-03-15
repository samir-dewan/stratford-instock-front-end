import React from "react";
import logo from "../../assets/logo/InStock-Logo.svg"; //using svg to adjust to viewport.
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header__main">
      <div className="header__flex">
        <Link to="/home">
          <img className="header__logo" src={logo} alt="the instock logo" />
        </Link>
        <div className="header__button-flex">
          <Link to="/warehouse">
            <button className="header__button">warehouses</button>
          </Link>
          <Link to="/inventory">
            <button className="header__button">inventory</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;