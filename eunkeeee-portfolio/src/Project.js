import { useState } from "react";
import Content from "./ProjectContent";

const Project = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Project ({count})</h2>
      <Content
        imgSrc="#"
        title="Portfolio"
        subtitle="ReactJS로 만든 포트폴리오 사이트"
      />
    </div>
  );
};

export default Project;
