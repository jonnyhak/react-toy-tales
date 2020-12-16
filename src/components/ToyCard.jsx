import { thisExpression } from '@babel/types';
import React, { Component } from 'react';

class ToyCard extends Component {

  // onClick thunk
  onDeleteClick = () => {
    this.props.deleteToy(this.props.toy.id)
  }

  onLikeClick = () => {
    this.props.updateToyLikes(this.props.toy.id, this.props.toy.likes)
    // console.log(this.props.toy.likes)
  }

  render() {
    // const {name, image, likes} = this.props.toys
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button 
        onClick={this.onLikeClick} 
        className="like-btn">Like {'<3'}</button>
        <button onClick={this.onDeleteClick} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
