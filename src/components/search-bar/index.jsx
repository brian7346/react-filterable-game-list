export default function SearchBar({
  filterText,
  inWhishListOnly,
  onFilterTextChange,
  oninWhishListOnlyChange,
}) {
  return (
    <form className="filter-form">
      <input
        className="search-input"
        type="text"
        value={filterText}
        placeholder="Поиск по названию"
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          className="in-whish-list-checkbox"
          type="checkbox"
          checked={inWhishListOnly}
          onChange={(e) => oninWhishListOnlyChange(e.target.checked)}
        />
        Только в списке желаемого
      </label>
    </form>
  );
}
