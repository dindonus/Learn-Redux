import { connect } from 'react-redux';
import Component from '../components/PhotoGrid';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const PhotoGrid = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default PhotoGrid;
