import React,{useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchQuery, setsearchQuery] = useState("")
  function handleSearch(query){
    setsearchQuery(query)
  }

  return (
    <div className="app">
      <Header  onSearchChange={handleSearch}/>
      <ListingsContainer  searchQuery={searchQuery}/>
    </div>
  );
}

export default App;
