// increment likes 
// actions are just objects that have a type and index
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comments, author, and post ID when adding comment
export function addComment(postId, author, comment) {
  console.log('Dispatching Add Comment ');
  
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment, need post Id and index
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i, 
    postId
  }
}