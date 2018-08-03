import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'
import Profile from './Profile'

class App extends Component {
  constructor(props) {
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments: {},
      user: {},
      isLoggedIn: false
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })
  }

  componentDidMount() {
    if (this.props.auth) {
      this.props.auth.onAuthStateChanged(user => {
        if (user) {
          this.setState({ isLoggedIn: true, user })
        } else {
          this.setState({ isLoggedIn: false, user: {} })
        }
      })
    }
  }

  postNewComment(comment) {
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName,
      photo: this.state.user.photoURL
    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()

    comments[`comm-${timestamp}`] = comment

    this.setState({
      comments
    })
  }

  onSignOut() {
    return () => this.props.auth.signOut()
  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div className="container">
        {this.state.isLoggedIn && (
          <React.Fragment>
            <Profile user={this.state.user} onSignOut={this.onSignOut()} />
            <NewComment postNewComment={this.postNewComment} />
          </React.Fragment>
        )}
        {!this.state.isLoggedIn && (
          <div className="alert">
            <button
              className="btn btn-primary"
              onClick={() => this.auth('google')}
            >
              Log In with Google
            </button>
          </div>
        )}
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default App
