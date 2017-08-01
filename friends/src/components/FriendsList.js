import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendsList extends Component {
  componentDidMount(props) {
    this.props.getFriends(props);
  }

  render() {
    return (
      <div>
       <ul>
          {this.props.friends.map((friend, i) => {
            return <li key ={i}>{friend.name} {friend.age} {friend.email}</li>
          })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {friends: state.friends};
}
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     { getFriends: getFriends,
//     },dispatch);
// }

export default connect(mapStateToProps, { getFriends })(FriendsList);