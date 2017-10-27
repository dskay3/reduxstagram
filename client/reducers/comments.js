function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return[...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        // fromt he start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  console.log(state, action);

  if (typeof action.postId !== 'undefined') {
    return {
      ...state, // takes the current state
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
