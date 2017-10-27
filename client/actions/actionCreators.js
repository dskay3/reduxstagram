// increment likes 
// actions are just objects that have a type and index
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comments, author, and post ID when adding comment
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment, need post Id and index
function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index, 
    postId
  }
}