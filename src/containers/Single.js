import { connect } from 'react-redux';
import Component from '../components/Single';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const Single = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Single;
