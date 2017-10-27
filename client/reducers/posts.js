function posts(state = [], action) {
  // act depending on wanted function
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing Likes');
      const i = action.index;
      
      return [
        ...state.slice(0, i), // before the one that is being updated
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one that is being updated
      ]
    default:
      return state;
  }

  return state;
}

export default posts;