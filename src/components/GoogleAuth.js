import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
import googleClientId from '../apis/config'

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init( {
        clientId: '235706198033-te0pur4d8ea3qhrnmdm1kiavvs9prq36.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        // Update our signed in status in props with any auth change.
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  // Sign in with console: gapi.auth2.getAuthInstance().signIn()
  // Sign out with console: gapi.auth2.getAuthInstance().signOut()

  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get()})
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn}
}

export default connect(
  mapStateToProps,
  { signIn, signOut}
)(GoogleAuth)
