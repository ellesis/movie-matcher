import React, { Component } from 'react'
import MovieItem from './MovieItem'
import './Movie.css';

class MovieList extends Component {
  render() {
    let movies = ""
    
    if (this.props.movie_count === 0) {
      movies = ""
    } else {
      movies = this.props.movies.map((movie) => {
        return <MovieItem
          key={movie.id}
          title={movie.title}
          year={movie.year}
          poster={movie.medium_cover_image}
          genres={movie.genres || []}
          synopsis={movie.synopsis}        
        />
      })      
    }
    
    return (
      <div className="Movie-list">
        <div className="Movie-count"><h5>Total Movies : {this.props.movie_count}</h5></div>        
        {movies}
      </div>
    );
  }
}

export default MovieList;