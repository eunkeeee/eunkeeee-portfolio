import styles from "./Home.module.css";
import profileImg from "./img/profile.jpg";

const Home = () => {
  return (
    <div>
      <img className={styles.profileImg} src={profileImg} />
      <h1 className={styles.title}>조은기</h1>
      <ul>
        <h4>약력</h4>
        <li>연세대학교 산업공학과 졸업 예정</li>
        <li>재택근무를 매우 희망함!!!</li>
        <p>
          수학을 매우 좋아하고 잘함, 하지만 연구실에는 가기 싫어! 어떻게 하면
          아줌마 아저씨들과 같은 장소가 아닌 편안하고 안락한 우리 집에서 최상의
          결과물을 낼 수 있을까? 개발자가 되자! 이렇게 시작한 개발자 모험
        </p>
      </ul>
    </div>
  );
};

export default Home;
