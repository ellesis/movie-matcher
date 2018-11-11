import React, { Component } from 'react';
import "./App.css";
import MovieItem from './components/movie/MovieItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[]
    }
  }

  componentDidMount() {
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count")
    .then(response => response.json())
    .then(json => {
      console.log(json.data.movies)
      this.setState({
        movies : json.data.movies
      })
    })
    .catch(err => console.log(err))    
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <MovieItem
        key={movie.id}
        title={movie.title}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}        
      />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        { //this.state.moveis ? this._renderMovies() :  "Loding"
          this._renderMovies()
        }
      </div>
    );
  }
}

export default App;
