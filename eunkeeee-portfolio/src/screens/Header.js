import App from "../App";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { useState } from "react";
import logoBackImg from "../img/logoBackImg.jpg";

const Header = ({ onClick }) => {
  return (
    <div className={styles.Header}>
      <header className={styles.Header_Header} onClick={onClick}>
        <div className={styles.Header_content}>
          <div className={styles.Header_title}>CEK's Portfolio</div>
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
      </header>

      <div className={styles.Mainhead_Mainhead}>
        <div className={styles.Mainhead_content}>
          <div className={styles.Mainhead_title}>
            - 조은기 -<br></br>웹 개발자 포트폴리오
          </div>
          <hr class={styles.Mainhead_divider}></hr>
          <div className={styles.Mainhead_description}>
            안녕하세요 <br></br>예쁜게 가장 좋은 웹 개발자입니다. <br></br>
            꼼꼼한 성격, 방구석과 컴퓨터를 좋아하는 것이 저의 장점입니다.
          </div>
          <div className={styles.Mainhead_findOutMore}>더 알아보기 ↓</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
