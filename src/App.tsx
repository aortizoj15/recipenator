import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './recipe';
require('dotenv').config();

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    const getRecipes = async () => {
      const appId = process.env.APP_ID;
      const appKey = process.env.APP_KEY;
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`);
      const data = await response.json();
      setRecipes(data.hits);
    }
    getRecipes();
  }, [query]);

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  }

  const getSearch = (e: any) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search}onChange={handleSearchChange}/>
        <button className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(({recipe}: any) => (
          <Recipe key={recipe.label} title={recipe.label} calories={recipe.calories} image={recipe.image} ingredients={recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}

export default App;
