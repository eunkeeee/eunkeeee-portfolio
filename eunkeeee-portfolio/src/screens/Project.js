import { useState } from "react";
import ProjectElement from "./ProjectElement";
import SubTitle from "../components/SubTitle";
import styles from "./Project.module.css";

const Project = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="#Projects" className={styles.Projects}>
      <div className={styles.content}>
        <SubTitle title="Projects" id="Projects" color="white" />
        <ProjectElement
          imgSrc="#"
          title="Portfolio"
          gitHubLink="https://github.com/eunkeeee/eunkeeee-portfolio.git"
          subtitle="ReactJS로 만든 포트폴리오 사이트"
        />
      </div>
    </div>
  );
};

export default Project;
