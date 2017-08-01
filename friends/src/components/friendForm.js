import React, { Component } from 'react';

class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: undefined,
      email: '',
    };

  }
  handleChange(event) {
    this.setState({
      name: event.target.value,
      age: event.target.value,
      email: event.target.value,
    });
    // console.log(this.state);
  }
  handleSubmit(event) {
    this
  }
  render() {
    return (
      <div>
        <form onSubmit={ this.deleteEverything }>
          <div>
            <label>Name</label>
            <input value={ this.state.name } type="text" required/>
          </div>
          <div>
            <label>Age</label>
            <input value={this.state.age} type="number" required/>
          </div>
          <div>
            <label>Email</label>
            <input value={this.state.email} type="text" required/>
          </div>
        </form>
      </div>
    );
  }
}

export default FriendForm;