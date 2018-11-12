import React, { Component } from 'react';
import './Header.css';
import * as service from '../services/search_api';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyword : 'xxx'
    }    
  }

  inputChangeHandler = (e)=>{
    console.log(e.target.value)
    this.setState({
      keyword:e.target.value
    })
  }

  clickSearchHandler = ()=>{
    //alert("button click")
    this.props.onSearchClick(this.state.keyword)
  }
  
  render() {
    return (
      <div className="Header">
        <h1>Movie-Matcher</h1>
        
        <div>
          Genres :
          <select>
            <option defaultValue="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Drama">Drama</option>
          </select>
                 
          <input 
            type="text"  
            onChange={this.inputChangeHandler}        
          />
          <button onClick={this.clickSearchHandler}>search</button>
        </div>
        
      </div>
    );
  }
}

export default Header;