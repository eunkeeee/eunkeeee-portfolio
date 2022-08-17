import App from "./App";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <h1 className={styles.title}>은기의 포트폴리오</h1>
    </div>
  );
};

export default Header;
