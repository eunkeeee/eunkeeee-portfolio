import { useState } from "react";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import styles from "./Navigation.module.css";

import Header from "./screens/Header";
import Mainhead from "./screens/Mainhead";
import AboutMe from "./screens/AboutMe";
import Skills from "./screens/Skills";
import Archiving from "./screens/Archiving";

function App() {
  const [nav, selectNav] = useState("Home");

  return (
    <div className="app">
      <Header />
      <Mainhead />
      <AboutMe />
      <Skills />
      <Archiving />

      <a href="#top">
        <div class="pageUpBtn">
          <i class="fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </div>
  );
}

export default App;
