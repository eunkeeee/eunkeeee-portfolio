import styles from "./Contact.module.css";
import { useState } from "react";
import ContactComponent from "./Contact-components";

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
      <ContactComponent
        text="Github Link"
        url="https://github.com/eunkeeee"
        imgSrc="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      />
      {/* Copy Gmail */}
      <ContactComponent
        text={copied ? "Copied!" : "Copy Gmail"}
        imgSrc="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
        onClick={copyMailAddress}
        onMouseLeave={backToGmail}
      />
    </div>
  );
};

export default Contact;
