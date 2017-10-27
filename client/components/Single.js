// import react
import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    // index of post
    const i = this.props.posts.findIndex(post => post.code === this.props.params.postId);
    console.log(i);

    const post = this.props.posts[i];
    console.log(post);

    // get post
    return (
      <div className='single-photo'>
        <Photo 
          i={i}
          post={post}
          {...this.props}
        />

        <Comments />
        
      </div>
    )
  }
}
export default Single;