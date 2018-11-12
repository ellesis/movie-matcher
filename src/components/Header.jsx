import React, { Component } from 'react';
import './Header.css';
import * as service from '../services/search_post';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyward : ''
    }
    
  }

  inputChangeHandler = (e)=>{
    console.log(e.target.value)
    this.setState({
      keyward:e.target.value
    })
  }

  clickSearchHandler = ()=>{

  }
  
  render() {
    return (
      <div className="Header">
        <h1>Movie-Matcher</h1>
        Genres :
        <select>
          <option defaultValue="All">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Drama">Drama</option>
        </select>
       
        search
        <input 
          type="text"  
          onChange={this.inputChangeHandler}        
        />       
        <button onClick={this.clickSearchHandler}>search</button>
      </div>
    );
  }
}

export default Header;