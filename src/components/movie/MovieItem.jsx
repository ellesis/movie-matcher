import React, { Component } from 'react'
import PropTypes from 'prop-types';

import LinesEllipsis from 'react-lines-ellipsis'

import './MovieItem.css';

class MovieItem extends Component {

  render() {
    console.log(this.props)

    return(
      <div className="Movie">
        <div className="Movie-column">
          <img className="Movie-poster" src={this.props.poster} alt={this.props.title} title={this.props.title}/>
        </div>
        <div className="Movie-column">
          <h1>{this.props.title}</h1>
          <div className="Movie-genres">
            {this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
          </div>
          <div className="Movie-synopsis">            
            <LinesEllipsis
              text={this.props.synopsis}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
          </div>
        </div>
      </div>
    )
  }
}

function MovieGenre({genre}){
  return(
    <span className="Movie-genre">{genre} </span>
  )
}

MovieItem.propTypes = {
  title : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.array.isRequired,
  synopsis : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre : PropTypes.string.isRequired
}

export default MovieItem
