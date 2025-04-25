const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="find contact by name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
