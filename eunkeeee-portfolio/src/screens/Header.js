import styles from "./Header.module.css";

const Header = ({ onClick }) => {
  return (
    <div>
      <header className={styles.Header} onClick={onClick}>
        <div className={styles.content}>
          <div className={styles.title}>CEK's Portfolio</div>
          <div className={styles.navigation__menus}>
            {/* Navigation Bar */}
            <div className={styles.navigation__menu}>About Me</div>
            <div className={styles.navigation__menu}>Skills</div>
            <div className={styles.navigation__menu}>Archiving</div>
            <div className={styles.navigation__menu}>Projects</div>
            <div className={styles.navigation__menu}>Career</div>
          </div>
          <a href="#" className={styles.navBtn}>
            <i class="fa-solid fa-bars navBtn"></i>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
