import styles from "./Contact.module.css";

const ContactComponent = ({ url, imgSrc, text, onClick, onMouseLeave }) => {
  return (
    <a href={url} target="_blank">
      <div
        className={styles.content}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      >
        <img className={styles.img} src={imgSrc} />
        <h4 className={styles.h4}>{text}</h4>
      </div>
    </a>
  );
};

export default ContactComponent;
