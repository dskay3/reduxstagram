import React, { Component } from 'react';

class Comments extends Component {
  renderComment(comment, i) {
    console.log(comment);
    return(
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
  }

  render() {
    return (
      <div className='comment'>
        {this.props.postComments.map(this.renderComment)}

        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>

      </div>
    )
  }
}

export default Comments;