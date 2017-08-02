import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, postFriends } from '../actions';
import { bindActionCreators } from 'redux'
import '../styles/FriendForm.css';

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

  setField(event) {
       const target = event.target;
       const value = target.value;
       const name = target.name;
       
       this.setState({
         [name]: value
       });
  }
  
  handleSubmit(event) {
    postFriends(this.state);
    getFriends();
  }

  render() {
    return (
      <div>
        <div>
          <form onChange={ this.setField } onSubmit={ this.handleSubmit }>
            <div className="input-container">
              <label>Name</label>
              <input name="name" value={ this.state.name } type="text" required/>
            </div>
            <div className="input-container">
              <label>Age</label>
              <input value={this.state.age} name="age" type="number" required/>
            </div>
            <div className="input-container">
              <label>Email</label>
              <input value={this.state.email} name="email" type="text" required/>
            </div>
            <div className="input-container">
              <label>Submit</label>
              <button type="submit">PUSH ME!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age,
    email: state.email,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      postFriends,
      getFriends,
    }, dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendForm);
