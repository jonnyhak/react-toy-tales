import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  componentDidMount() {
    fetch('http://localhost:3000/toys')
      .then(response => {
        return response.json()
      })
      .then(toysArr => {
        this.setState({
          toys: toysArr
        })
      })
  }
  addToy = (newToyObj) => {
    fetch('http://localhost:3000/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        name: newToyObj.name,
        image: newToyObj.image,
        likes: newToyObj.likes
      })
    })
      .then(response => {
        return response.json()
      })
      .then(toyObj => {
        // console.log(toyObj)
        this.setState({ todos: [...this.state.toys, toyObj]})
      })
      .catch(console.log)
  }

  // deleteToy = (id) => {
  //   fetch(`http://localhost:3000/toys/${id}`, {
  //     method: "DELETE"
  //   })
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then( res => 
  //       this.setState({ toys: [...this.state.toys.filter (toy => 
  //         toy.id !== id )]
  //       })
  //     )
  // }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
          toys={this.state.toys}
          // deleteToy={this.deleteToy}
        />
      </>
    );
  }

}

export default App;
