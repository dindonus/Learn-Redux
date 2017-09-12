import React from 'react';
import Photo from '../containers/Photo';

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => <Photo key={index} index={index} post={post} comments={this.props.comments[post.code]} />)}
      </div>
    )
  }
}

export default PhotoGrid;
