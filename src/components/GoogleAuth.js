import React from 'react'

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init( {
        clientId: '326254808743-oqfspace8f7v5i0irb7bv37m7m1gn08l.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
        // Update our signed in status in state with any auth change.
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  // Sign in with console: gapi.auth2.getAuthInstance().signIn()
  // Sign out with console: gapi.auth2.getAuthInstance().signOut()

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get()})
  }

  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
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

export default GoogleAuth
