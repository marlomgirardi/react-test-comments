import React, { Component } from 'react'

class NewComment extends Component {
  constructor(props) {
    super(props)

    this.handleEnter = this.handleEnter.bind(this)
  }
  handleEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.props.postNewComment({
        comment: this.refs.comment.value
      })
      this.refs.comment.value = ''
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <textarea
            ref="comment"
            placeholder="Leave your comment!"
            className="form-control mt-4"
            onKeyDown={this.handleEnter}
          />
        </div>
      </div>
    )
  }
}

export default NewComment
