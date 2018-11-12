import React, { Component } from 'react'
import MovieItem from './MovieItem'
import './MovieItem.css';

class MovieList extends Component {
  render() {
    const movies = this.props.movies.map((movie) => {
      return <MovieItem 
        key={movie.id}
        title={movie.title}
        poster={movie.medium_cover_image}
        genres={movie.genres || []}
        synopsis={movie.synopsis}        
      />
    })

    return (
      <div>
        {movies}
      </div>
    );
  }
}

export default MovieList;