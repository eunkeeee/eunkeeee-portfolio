import { useState } from "react";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import styles from "./Navigation.module.css";

import Header from "./screens/Header";
import AboutMe from "./screens/AboutMe";
import Skills from "./screens/Skills";

function App() {
  const [nav, selectNav] = useState("Home");

  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Skills />

      {/* <nav className={styles.nav_display}>
        <div onClick={() => selectNav("Project")}>Project</div>
        <div onClick={() => selectNav("Contact")}>Contact</div>
      </nav>
      <hr />
      {nav === "Home" ? (
        <div>
          <Home />{" "}
          <button onClick={() => selectNav("Project")}>
            프로젝트 보러가기
          </button>
        </div>
      ) : null}
      {nav === "Project" ? <Project /> : null}
      {nav === "Contact" ? <Contact /> : null} */}
    </div>
  );
}

export default App;
