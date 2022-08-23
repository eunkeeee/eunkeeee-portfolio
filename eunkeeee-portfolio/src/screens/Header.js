import styles from "./Header.module.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = ({ onClick }) => {
  const [isOpen, setMenu] = useState(false);
  return (
    <div>
      <header className={styles.Header} onClick={onClick}>
        <div className={styles.content}>
          <a href="#top">
            <div className={styles.title}>CEK's Portfolio</div>
          </a>
          {isOpen ? null : (
            <div className={styles.navigation__menus}>
              {/* Navigation Bar */}
              <div className={styles.navigation__menu}>About Me</div>
              <div className={styles.navigation__menu}>Skills</div>
              <div className={styles.navigation__menu}>Archiving</div>
              <div className={styles.navigation__menu}>Projects</div>
              <div className={styles.navigation__menu}>Career</div>
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
