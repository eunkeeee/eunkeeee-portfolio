import App from "./App";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { useState } from "react";
import logo from "./img/logo.png";

const Header = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={logo} />
    </div>
  );
};

export default Header;
