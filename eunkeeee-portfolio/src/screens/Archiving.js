import SubTitle from "../components/SubTitle";
import ArchivingElement from "../components/ArchivingElement";
import styles from "./Archiving.module.css";

const Archiving = () => {
  return (
    <div className={styles.Archiving}>
      <div className={styles.content}>
        <SubTitle id="Archiving" title="Archiving" />
        <div className={styles.container}>
          <ArchivingElement
            imgSrc="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTNfOTMg/MDAxNTk0NjM0NjI5NzUw.LxX1Whkaof_e-n3N_wO03lSoZl--YMF8dkgRMxImNk0g.BxwVQn5zShY21jnl8r8ynp0Kg9Ggqf1gtZgSMu970KQg.PNG.nms200299/github.png?type=w800"
            url="https://github.com/eunkeeee"
            p="모든 프로젝트의 소스코드를 저장한 GitHub입니다."
            // liArray={
            //   ("과거 프로젝트, 프로그램, 앱의 소스 코드",
            //   "혼자서 코딩 연습을 위해 끄적이던 소스 코드")
            // }
          />
        </div>
      </div>
    </div>
  );
};
export default Archiving;
