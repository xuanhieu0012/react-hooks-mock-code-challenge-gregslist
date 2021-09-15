import React, {useState} from "react";

function Search({onSearchChange}) {
  const [isSearch, setIsSearch] = useState("")
  function handleSubmit(e) {

    e.preventDefault();
    
    onSearchChange(isSearch)
    console.log(isSearch)
  }
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={isSearch}
        onChange={e => setIsSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
