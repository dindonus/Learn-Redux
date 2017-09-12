import React from 'react';
import { connect } from 'react-redux';
import Component from '../components/Comments';
import { addComment, removeComment } from '../actions/actionCreators';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: (postId, author, comment) => {
    dispatch(addComment(postId, author, comment));
  },
  onRemove: (postId, index) => {
    dispatch(removeComment(postId, index))
  }
});

const Comments = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Comments;
