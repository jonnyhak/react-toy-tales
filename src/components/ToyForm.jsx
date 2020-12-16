import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: '',
    image: '',
    likes: 0
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToy(this.state)
    // console.log(this.state)
    this.setState({
      name: '',
      image: '',
      likes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input 
            value={this.state.name}
            onChange={this.onChange} 
            type="text" name="name" 
            placeholder="Enter a toy's name..." 
            className="input-text"
          />
          <br/>
          <input 
            value={this.state.image}
            onChange={this.onChange} 
            type="text" name="image" 
            placeholder="Enter a toy's image URL..." 
            className="input-text"
          />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
