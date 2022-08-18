import styles from "./AboutMe.module.css";
import AboutMe_basic_info from "./AboutMe_basic_info";

const AboutMe = () => {
  return (
    <article className={styles.AboutMe}>
      <div className={styles.AboutMe_content}>
        <div className={styles.SectionTitle_Sectiontitle}>
          <div className={styles.SectionTitle_text}>ABOUT ME</div>
          <div className={styles.SectionTitle_link_wrapper}>
            <img
              className={styles.SectionTitle_link}
              src="https://cdg-portfolio.com/images/black-link.png"
            />
          </div>
        </div>
        <div className={styles.AboutMe_basic_infos}>
          <AboutMe_basic_info
            iconImport={<i class="fa-solid fa-person"></i>}
            fieldLabel="이름"
            fieldValue="조은기"
          />
          <AboutMe_basic_info
            iconImport={<i class="fa-solid fa-calendar"></i>}
            fieldLabel="생년월일"
            fieldValue="00.04.16"
          />
          <AboutMe_basic_info
            iconImport={<i class="fa-solid fa-location-dot"></i>}
            fieldLabel="주소"
            fieldValue="서울특별시 서초구"
          />
          <AboutMe_basic_info
            iconImport={<i class="fa-solid fa-phone"></i>}
            fieldLabel="연락처"
            fieldValue="010-2555-3673"
          />
          <AboutMe_basic_info
            iconImport={<i class="fa-solid fa-at"></i>}
            fieldLabel="이메일"
            fieldValue="eunkeee@yonsei.ac.kr"
          />
          <AboutMe_basic_info
            iconImport={<i class="fa-solid fa-school"></i>}
            fieldLabel="학력"
            fieldValue="연세대학교 산업공학과"
          />
        </div>
      </div>
    </article>
  );
};
export default AboutMe;
