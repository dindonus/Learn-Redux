import React from 'react';
import Photo from '../containers/Photo';
import Comments from '../containers/Comments';

class Single extends React.Component {
  render() {
    const { match, posts, comments } = this.props;
    const { postId } = match.params;
    const index = posts.findIndex((post) => post.code === postId);
    const post = posts[index];
    const postComments = comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} comments={postComments} />
        <Comments postId={postId} comments={postComments} />
      </div>
    )
  }
}

export default Single;
