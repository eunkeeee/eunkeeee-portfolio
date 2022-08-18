import App from "./App";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { useState } from "react";
import logoBackImg from "./img/logoBackImg.jpg";

const Header = ({ onClick }) => {
  return (
    <div className={styles.Header} onClick={onClick}>
      <div className={styles.Header_content}>
        <div>
          <h1 className={styles.title}>CEK's Portfolio</h1>
        </div>
        <div className={styles.Header_navigation__menus}>
          {/* Navigation Bar */}
          <div className={styles.Header_navigation__menu}>About Me</div>
          <div className={styles.Header_navigation__menu}>Skills</div>
          <div className={styles.Header_navigation__menu}>Archiving</div>
          <div className={styles.Header_navigation__menu}>Projects</div>
          <div className={styles.Header_navigation__menu}>Career</div>
          {/* <img src="https://cdg-portfolio.com/images/hamburger.svg" /> */}
        </div>
      </div>

      {/* <img className={styles.logoBackImg} src={logoBackImg} /> */}
    </div>
  );
};

export default Header;
