import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  renderComment(key, comment) {
    return <Comment key={key} comment={comment} />
  }

  render() {
    const comments = this.props.comments
    return (
      <div>
        <h1 className="mt-3">Comments</h1>
        {Object.keys(comments).map(key =>
          this.renderComment(key, comments[key])
        )}
      </div>
    )
  }
}

export default Comments
