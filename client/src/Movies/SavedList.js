import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MovieList from './MovieList';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie:null
    }
  }


  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <div>
          <NavLink to={`/movies/${movie.id}`}>
          {movie.title}
          </NavLink>

          </div>
          
        ))}
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}

//<div className="save-button un-save" onClick={() => this.props.unSave()}>Un-Save</div>