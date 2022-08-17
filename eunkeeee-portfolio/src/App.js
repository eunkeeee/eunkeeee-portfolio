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
      <Header
        onClick={() => {
          selectNav("Home");
        }}
      />
      <nav className={styles.nav_display}>
        <div onClick={() => selectNav("Home")}>Home</div>
        <div onClick={() => selectNav("Project")}>Project</div>
        <div onClick={() => selectNav("Contact")}>Contact</div>
      </nav>
      <hr />
      {nav === "Home" ? (
        <div>
          <Home />{" "}
          <button onClick={() => selectNav("Contact")}>
            프로젝트 보러가기
          </button>
        </div>
      ) : null}
      {nav === "Project" ? <Project /> : null}
      {nav === "Contact" ? <Contact /> : null}
    </div>
  );
}

export default App;
