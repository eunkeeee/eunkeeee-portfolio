import styles from "./Header.module.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = ({ onClick }) => {
  const [isOpen, setMenu] = useState(false);
  const header = document.querySelector("#Header");
  // header.styles.backgroundColor = "white";
  return (
    <div>
      <header id="Header" className={styles.Header} onClick={onClick}>
        <div className={styles.content}>
          <a href="#top">
            <div className={styles.title}>CEK's Portfolio</div>
          </a>
          {isOpen ? null : (
            <div className={styles.navigation__menus}>
              {/* Navigation Bar */}
              <div className={styles.navigation__menu}>
                <a href="#AboutMe">About Me</a>
              </div>
              <div className={styles.navigation__menu}>
                <a href="#Skills">Skills</a>
              </div>
              <div className={styles.navigation__menu}>
                <a href="#Archiving">Archiving</a>
              </div>
              <div className={styles.navigation__menu}>
                <a href="#Projects">Projects</a>
              </div>
              {/* <div className={styles.navigation__menu}>
                <a href="#AboutMe">Career</a>
              </div> */}
            </div>
          )}
          <a
            href="#"
            className={styles.toggleBtn}
            onClick={() => {
              setMenu((prev) => !prev);
              console.log(isOpen);
            }}
          >
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
