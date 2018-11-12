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
    this.setState({
      movies
    })
  }
  
  componentDidMount() {
    service.getMovie("list_movies.json?sort_by=like_count", this.updateMovies)
  }

  searchClick = (query_string) => {
    //alert("search click function" + keyword)
    let url = "list_movies.json?"+ query_string
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
