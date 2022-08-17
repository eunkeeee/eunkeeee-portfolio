import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyMailAddress = () => {
    setCopied(true);
    const tempElem = document.createElement("textarea");
    tempElem.value = "eunkeee@yonsei.ac.kr";
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
  };
  const backToGmail = () => {
    setCopied(false);
  };
  return (
    // Github
    // Gmail
    <div className={styles.container}>
      <a href="https://github.com/eunkeeee" target="_blank">
        <div className={styles.content}>
          <img
            className={styles.img}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <h4 className={styles.h4}>Github Link</h4>
        </div>
      </a>

      <div
        className={styles.content}
        onClick={copyMailAddress}
        onMouseLeave={backToGmail}
      >
        <img
          className={styles.img}
          src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
        />
        <h4 className={styles.h4}>{copied ? "Copied!" : "Copy Gmail"}</h4>
      </div>
    </div>
  );
};

export default Contact;
