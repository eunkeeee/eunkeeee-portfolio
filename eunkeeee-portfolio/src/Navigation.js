import { useState } from "react";
import { BrowerRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./Navigation.module.css";
import Home from "./Home";

const Navigation = () => {
  const [state, setState] = useState(0);
  const onClick = (event) => {
    console.log("Move to other page", event);
    const target = event.target;
    target.color = "tomato";
  };
  const onHome = () => {
    window.location.href = "./Home.js";
  };
  return (
    // <div className={styles.nav_display}>
    //   <div onClick={onHome}>Home</div>
    //   <div onClick={onClick}>Project</div>
    //   <div onClick={onClick}>Contact</div>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
