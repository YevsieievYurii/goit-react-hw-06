import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      {name} : {number}
      <button
        className={styles.contactButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
