import css from "./SearchBox.module.css";
const SearchBox = ({ valueContacts, setFilter }) => {
  return (
    <div>
      <label htmlFor="filter" className={css.labelFilter}> Find contacts by name </label>
      <input
        className={css.inputSearch}
        type="text"
        name="filter"
        value={valueContacts}
        onChange={(event) => {
          const inputValue = event.target.value.trim().toLowerCase();
          setFilter(inputValue);
        }}
        id="filter"
        required
      />
    </div>
  );
};

export default SearchBox