import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }
  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.removeComment.bind(null, index)}>
            &times;
          </button>
        </p>
      </div>
    )
  }
  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.addComment(author, comment);
    this.refs.commentForm.reset();
  }
  removeComment(index) {
    this.props.onRemove(this.props.postId, index)
  }
  addComment(author, comment) {
    this.props.onAdd(this.props.postId, author, comment)
  }
  render() {
    return (
      <div className="comments">
        {this.props.comments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;
