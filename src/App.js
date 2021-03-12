import React, { useState, useEffect } from "react";
import Search from "./components/ui/Search";
import MealGrid from "./components/meals/MealGrid";
import NavigationBar from './components/ui/NavigationBar';
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const APP_ID = '2a4d3c1a';
  const APP_KEY = '38a889f7cc59c756e6258674c569a2d7';

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setItems(result.data.hits);
      console.log(result.data.hits);
      setIsLoading(false);
    };
    
    fetchItems();
  }, [query]);
 

  return (
    <div className="container">
      <NavigationBar />
      <Search getQuery={(q) => setQuery(q)} />
      <MealGrid items={items} isLoading={isLoading} />
     
    </div>
  );
}

export default App;
