import React, { Component } from 'react';
import axios from 'axios';

import MovieList from './components/movie/MovieList'
import Header from './components/Header'

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_count: 0,  
      movies:[]
    }
  }
  
  updateMovies = (movies)=>{
    this.setState({
      movies
    })
  }

  componentDidMount() {
    //service.getMovie("list_movies.json?sort_by=like_count", this.updateMovies)
    axios.get("https://yts.am/api/v2/list_movies.json?sort_by=like_count")
    .then( (response)=>{
      this.setState({
        movie_count: response.data.data.movie_count,
        movies : response.data.data.movies
      })
    })
  }

  searchClick = (query_string)=>{
    // search button click    
    // let url = "list_movies.json?"+ query_string
    // service.getMovie(url, this.updateMovies) 
    console.log("<<<searchClick query>>>" + query_string)

    axios.get("https://yts.am/api/v2/list_movies.json?" + query_string)
    .then( (response)=>{
      if (response.data.data.movie_count === 0){           
        this.setState({
          movie_count : response.data.data.movie_count,
          movies : []
        })
      } else {
        console.log("<<<searchClick data>>>")
        console.log(response) 

        if (response.data.data.movies === undefined){
          alert("Movies Data Error")
        } else {
          this.setState({
            movie_count : response.data.data.movie_count,
            movies : response.data.data.movies
          })
        }
      }
    })
  }

  // searchClick = async (query_string)=>{
  //   let url = "list_movies.json?"+ query_string
  //   try {
  //     //wait for promise
  //     let movies = await service.getMovieAxios(url)
      
  //     console.log("<<<searchClick>>> ")
  //     console.log(movies)
  //     // this.setState({
  //     //   movies
  //     // })
      
  //   } catch(e) {
  //     console.log('error occurred', e);
  //   }  
  // }

  render() {
    
    return (
      <div className="App">
        <Header 
          onSearchClick={this.searchClick}
        />
        
        <MovieList
          movie_count={this.state.movie_count}
          movies={this.state.movies} 
        /> 
         
      </div>
    );
  }
}

export default App;
