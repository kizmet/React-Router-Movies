import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";
import Movie from "./Movies/Movie";

const App = () => {
  let storedList;
  try {
    storedList = localStorage.getItem("savedList")
      ? JSON.parse(localStorage.getItem("savedList"))
      : [];
  } catch (e) {
    storedList = [];
  }
  const [savedList, setSavedList] = useState(storedList || []);

  const addToSavedList = movie => {
    const idList = savedList.map(savedList => savedList.id);
    idList.includes(movie.id)
      ? setSavedList([...savedList])
      : setSavedList([...savedList, movie]);
  };

  const removeFromSavedList = id => {
    setSavedList(savedList.filter(movie => movie.id !== id));
  };

  useEffect(
    () => window.localStorage.setItem("savedList", JSON.stringify(savedList)),
    [savedList]
  );

  return (
    <div>
      <Route
        render={props => (
          <SavedList
            {...props}
            list={savedList}
            removeFromSavedList={removeFromSavedList}
          />
        )}
      />

      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      />
    </div>
  );
};

export default App;
