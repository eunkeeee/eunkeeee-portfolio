import { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import styles from "./Navigation.module.css";

function App() {
  const [nav, selectNav] = useState("Home");
  return (
    <div>
      <Header />
      <nav className={styles.nav_display}>
        <div onClick={() => selectNav("Home")}>Home</div>
        <div onClick={() => selectNav("Project")}>Project</div>
        <div onClick={() => selectNav("Contact")}>Contact</div>
      </nav>
      <hr />
      {nav === "Home" ? <Home /> : null}
      {nav === "Project" ? <Project /> : null}
      {nav === "Contact" ? <Contact /> : null}
    </div>
  );
}

export default App;