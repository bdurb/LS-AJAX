import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const NEW_FRIEND = 'NEW_FRIEND';


export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
    return {
        type: GET_FRIENDS,
        payload: promise
    };
};

export const postFriends = (newFriend) => {
    const promise = axios.post('http://localhost:5000/new-friend');
    return {
        type: NEW_FRIEND,
        payload: promise
    };
};
