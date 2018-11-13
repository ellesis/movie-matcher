import React, { Component } from 'react';
import './Header.css';
import * as service from '../services/search_api';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyword : '',
      genre : 'all'
    }    
  }

  inputChangeHandler = (e)=>{
    console.log(e.target.value)
    this.setState({
      keyword : e.target.value
    })
  }

  clickSearchHandler = ()=>{
    //search button click    
    let query_string = "genre=" + this.state.genre + "&query_term='" + this.state.keyword + "'"
    this.props.onSearchClick(query_string)
  }

  keyPressHandler = (e)=>{
    // Enter key press on textbox
    if(e.keyCode === 13){
      let query_string = "genre=" + this.state.genre + "&query_term='" + this.state.keyword + "'"
      this.props.onSearchClick(query_string)      
    }
  }

  onChangListHandler = (e)=>{
    //select list change    
    this.setState({
      genre : e.target.value
    })
  }

  render() {
    return (
      <div className="Header">
        <h2>Movie-Matcher</h2>
        
        <div>
          Genres 
          <select onChange={this.onChangListHandler}>
            <option defaultValue="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Film Noir">Film Noir</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Music">Music</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Short">Short</option>
            <option value="Sport">Sport</option>
            <option value="Superhero">Superhero</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
          </select>
                 
          <input 
            type="text"  
            onChange={this.inputChangeHandler}
            onKeyDown={this.keyPressHandler}    
          />
          <button onClick={this.clickSearchHandler}>search</button>
        </div>
        
      </div>
    );
  }
}

export default Header;