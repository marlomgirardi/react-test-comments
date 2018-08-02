import React from 'react'
import PropTypes from 'prop-types'

// stateless functional component
const Comment = ({ comment }) => (
  <div className="card mb-2">
    <p className="card-body m-0">{comment.comment}</p>
  </div>
)

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
