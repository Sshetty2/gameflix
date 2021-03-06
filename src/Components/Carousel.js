import React, { Component } from 'react';
import GameCard from './GameCard';
import { uid } from 'react-uid';

export default class Carousel extends Component {


  shiftCarousel(event) {
    const shiftDirection = event.target.classList.contains('fa-angle-right') ? 1 : -1;
    const currentPosition = event.target.parentElement.childNodes[2].scrollLeft;
    event.target.parentElement.childNodes[2].scrollLeft = currentPosition + (292 * shiftDirection);
  }

  render() {
    const { genre, matchingGames, createPopUp, children } = this.props;
    return (

      <nav className="Carousel" data-genre={genre.genre}>
        <h4 className="genre">{genre.genre}</h4>
        <i onClick={this.shiftCarousel} className="fas fa-angle-left side-carrot"></i>
        <div className="scroll-container">
          {matchingGames.map(game => ((
            <GameCard
              key={uid(game)}
              game={game}
              createPopUp={createPopUp}
            />
          )))}
        </div>
        <i onClick={this.shiftCarousel} className="fas fa-angle-right side-carrot"></i>
        {children}
      </nav>
    )
  }
}