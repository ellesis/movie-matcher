import React, { Component } from 'react';
import "./App.css";

import * as service from './services/search_api';
import MovieList from './components/movie/MovieList'
import Header from './components/Header'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      movies:[]
    }
  }
  
  updateMovies = (movies) => {
    console.log("<<<updateMovies>>>" + movies)      
    this.setState({
      movies
    })
    console.log("<<<updateMovies>>>" + movies)    
  }
  

  componentDidMount() {
    service.getMovie("list_movies.json?sort_by=rating", this.updateMovies)
  }

  searchClick = (keyword) => {
    alert("search click function" + keyword)
    let url = "list_movies.json?query_term="+keyword
    service.getMovie(url, this.updateMovies)

  
  }

  render() {
    return (
      <div className="App">
        <Header 
          onSearchClick={this.searchClick}
        />
        <MovieList
          movies={this.state.movies} 
        />
        
      </div>
    );
  }
}

export default App;
