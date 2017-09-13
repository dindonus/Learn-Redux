import React from 'react';
import Photo from '../containers/Photo';

const PhotoGrid = ({ posts, comments }) => (
  <div className="photo-grid">
    {posts.map((post, index) => (
      <Photo key={index} index={index} post={post} comments={comments[post.code]} />
    ))}
  </div>
)

export default PhotoGrid;
