import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      movies: null
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    const findMovie = savedList.find(a => movie.id === a.id);
    if (findMovie) {
        return
    } else {
      savedList.push(movie);
    }

    this.setState({ savedList });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id"
          render={props => (
            <Movie {...props} 
            addToSavedList={this.addToSavedList} 
            />
          )}
        />
      </div>
    );
  }
}
