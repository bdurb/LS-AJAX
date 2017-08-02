import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import '../styles/FriendsList.css';

class FriendsList extends Component {
  componentDidMount(props) {
    this.props.getFriends(props);
  }

  render() {
    return (
      <div>
        <div className="ul-div">
          <ul>
            {this.props.friends.map((friend, i) => {
              return (
                <li key ={i}>
                  <p>Name: {friend.name} | Age: {friend.age}</p>
                  <email className="yes-yall">
                    <a href={`mailto:` + friend.email }>{friend.email}</a>
                  </email> 
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {friends: state.friends};
}

export default connect(mapStateToProps, { getFriends })(FriendsList);
