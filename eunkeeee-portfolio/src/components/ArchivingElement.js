import { Link } from "react-router-dom";
import styles from "../screens/Archiving.module.css";

const ArchivingElement = ({ imgSrc, url, p, liArray }) => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <img src={imgSrc} className={styles.elementImg} />
      </div>
      <div className={styles.url}>{url}</div>
      <div className={styles.description}>
        <p>{p}</p>
        <ul>
          {/* {liArray.foreach((element) => {
            <li>{element}</li>;
          })} */}
        </ul>
      </div>
    </div>
  );
};
export default ArchivingElement;
