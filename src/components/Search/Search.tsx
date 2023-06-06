import Menu from "../Menu/Menu";

function Search() {
  return (
    <div className="search block">
      <h2>Search block</h2>
      <form className="search_form block">
        <h3>Search form</h3>
        <Menu items={['opt1', 'opt2', 'opt3', 'opt4']} />
        <input className="search-input" />
        <button className="search-btn">Найти</button>
      </form>
    </div>
  );
}

export default Search;
