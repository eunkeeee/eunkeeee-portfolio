import styles from "../AboutMe.module.css";

const AboutMe_basic_info = ({ iconImport, fieldLabel, fieldValue }) => {
  return (
    <div className={styles.basic_info_wrapper}>
      <div className={styles.basic_info}>
        <div className={styles.basic_info_icon_wrapper}>{iconImport}</div>
        <div className={styles.basic_info_field}>
          <div>{fieldLabel}</div>
          <div>{fieldValue}</div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe_basic_info;
