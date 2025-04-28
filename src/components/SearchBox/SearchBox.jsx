import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={styles.searchInput}
      type="text"
      value={value}
      placeholder="find contact by name"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
