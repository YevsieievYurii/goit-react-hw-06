import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      {name}: {number}
      <button
        className={styles.contactButton}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
