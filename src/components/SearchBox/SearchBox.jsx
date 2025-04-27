import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="find contact by name"
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
};

export default SearchBox;
