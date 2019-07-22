import React, { useState } from "react";
import { Route, FadeIn } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie])
    const idList = savedList.map(savedList => savedList.id)
    idList.includes(movie.id) ?  setSavedList([...savedList]) : setSavedList([...savedList, movie])
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      />
    </div>
  );
};

export default App;
