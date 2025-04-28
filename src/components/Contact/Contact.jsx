import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDelete(id)} className={styles.contactButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
