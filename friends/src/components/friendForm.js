import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, postFriends } from '../actions';
import { bindActionCreators } from 'redux'




class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: undefined,
      email: '',
    };
    this.setField = this.setField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  setField (event) {

       const target = event.target;
       const value = target.value;
       const name = target.name;

       this.setState({
         [name]: value
       });

    // this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.postFriends({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })

    getFriends();
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <form onChange={this.setField} onSubmit={ this.handleSubmit }>
          <div>
            <label>Name</label>
            <input
              name="name"
              value={ this.state.name }
              // onChange={ this.handleChange }
              type="text" required/>
          </div>
          <div>
            <label>Age</label>
            <input value={this.state.age}
              name="age"
              // onChange={ this.handleChange }
              type="number" required/>
          </div>
          <div>
            <label>Email</label>
            <input value={this.state.email}
              name="email"
              // onChange={ this.handleChange }
              type="text" required/>
          </div>
          <button type="submit">test</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {name: state.name, age: state.age, email: state.email};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { postFriends: postFriends,
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendForm);
