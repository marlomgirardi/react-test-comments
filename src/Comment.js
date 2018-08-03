import React from 'react'
import PropTypes from 'prop-types'

// stateless functional component
const Comment = ({ comment }) => (
  <div className="card mb-2">
    <p className="card-body m-0">{comment.comment}</p>
    <p className="card-footer m-0">
      <img
        src={comment.user.photo}
        alt={comment.user.name}
        style={{ width: '35px', marginRight: '10px' }}
        className="rounded-circle"
      />
      {comment.user.name}
    </p>
  </div>
)

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
