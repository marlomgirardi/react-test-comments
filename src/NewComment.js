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
        <textarea
          ref="comment"
          placeholder="Comente!"
          className="form-control mt-4"
          onKeyDown={this.handleEnter}
        />
      </div>
    )
  }
}

export default NewComment
