import styles from "./Header.module.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = ({ onClick }) => {
  const [isOpen, setMenu] = useState(false);
  // const isSmallWindow = useMediaQuery({
  //   query: "(max-width:1100px)",
  // });
  // const headerBack = document.querySelector(".content");
  // headerBack.styles.backgroundColor = "tomato";
  const setHeaderBackGround = () => {
    // if (
    //   document.body.scrollTop > 200 ||
    //   document.documentElement.scrollTop > 200
    // ) {
    // event.target.styles.backgroundColor = "tomato";
    // console.log(event.target);
    console.log("im scrolled");
    // }
  };
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
