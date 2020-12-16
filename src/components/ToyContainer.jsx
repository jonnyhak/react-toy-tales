import { thisExpression } from '@babel/types';
import React, { Component } from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends Component {
  // state = {
  //   toys: []
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3000/toys')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(toysArr => {
  //       this.setState({
  //         toys: toysArr
  //       })
  //     })
  // }
  render() {
    return(
      <div id="toy-collection">
      {this.props.toys.map((toy) => (
        <ToyCard 
          key={toy.id} 
          toy={toy}
          deleteToy={this.props.deleteToy}
          updateToyLikes={this.props.updateToyLikes} 
        />
      ))}
      </div>
    );
  }
}

export default ToyContainer;
