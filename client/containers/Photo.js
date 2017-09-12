import React from 'react';
import { connect } from 'react-redux';
import Component from '../components/Photo';
import { increment } from '../actions/actionCreators';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLike: (index) => {
    dispatch(increment(index));
  },
});

const Photo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Photo;
