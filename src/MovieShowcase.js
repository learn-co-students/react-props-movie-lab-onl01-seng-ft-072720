import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    const movieCards = movieData.map((poster) =>
    <React.Fragment>
      <MovieCard title={poster.title} IMDBRating={poster.IMDBRating} genres={poster.genres} poster={poster.poster}>
      </MovieCard>
    </React.Fragment>
    )
    return (
    <ul>{movieCards}</ul>
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
