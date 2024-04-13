export const SearchBar = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="searchField">Find contacts by name</label>
      <input
        id="searchField"
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </div>
  );
};
