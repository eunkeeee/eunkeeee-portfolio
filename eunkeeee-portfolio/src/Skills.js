import SubTitle from "./components/SubTitle";
import Skill from "./components/Skill";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <article id="Skills" className={styles.Skills}>
      <div className={styles.content}>
        <SubTitle id="Skills" title="Skills" />
        <div className={styles.techContainer}>
          <Skill
            title="Frontend"
            imgSrcsWithDiv={
              <div>
                <img src="https://velog.velcdn.com/images/songe/post/c1c7427a-71c3-4de8-bf93-a224be79f6ae/image.PNG" />
                <img src="https://www.kindpng.com/picc/m/296-2968253_1460px-react-logo-react-native-logo-png-transparent.png" />
              </div>
            }
          />
        </div>
      </div>
    </article>
  );
};
export default Skills;
