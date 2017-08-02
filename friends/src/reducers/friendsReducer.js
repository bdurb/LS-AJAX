const friendsReducer = (friends = [], action) => {
  switch (action.type) {
    case 'GET_FRIENDS':
      return action.payload.data;
    case 'NEW_FRIEND':
      return action.payload.data;
    default:
      return friends;

    }
};

export default friendsReducer;
