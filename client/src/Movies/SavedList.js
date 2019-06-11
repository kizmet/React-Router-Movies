import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MovieList from './MovieList';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        ))}
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}

//<div className="save-button un-save" onClick={() => this.saveMovie()}>Un-Save</div>