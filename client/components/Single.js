// import react
import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    const { postId } = this.props.params;
    
    // index of post
    const i = this.props.posts.findIndex(post => post.code === postId);
    console.log(i);

    const post = this.props.posts[i];
    console.log(post);

    const postComments = this.props.comments[postId || []];

    // get post
    return (
      <div className='single-photo'>
        <Photo 
          i={i}
          post={post}
          {...this.props}
        />

        <Comments
          postComments={postComments}
          {...this.props}
        />

      </div>
    )
  }
}
export default Single;