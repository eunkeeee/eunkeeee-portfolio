import styles from "./ProjectElement.module.css";

const Content = ({ imgSrc, title, subtitle, gitHubLink }) => {
  return (
    <div className={styles.content}>
      <img className={styles.img} src={imgSrc} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <a target="_blank" href={gitHubLink}>
        GitHub 바로가기
      </a>
      <div className={styles.props}>
        <h5>ReactJS</h5>
        <h5>개인</h5>
      </div>
    </div>
  );
};
export default Content;
