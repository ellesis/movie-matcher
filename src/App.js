import React, { Component } from 'react';
import "./App.css";

import * as service from './services/search_post';
import MovieList from './components/movie/MovieList'
import Header from './components/Header'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[]
    }
  }

  componentDidMount() {
    fetch("https://yts.am/api/v2/list_movies.json?query_term=Avengers")
    .then(response => response.json())
    .then(json => {
      //console.log(json.data.movies)
      this.setState({
        movies : json.data.movies
      })
    })
    .catch(err => console.log(err))    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList
          movies={this.state.movies} 
        />
        
      </div>
    );
  }
}

export default App;
