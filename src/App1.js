import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">login by Gmail</h1>
        </header>

        {!this.state.isLoggedIn ? (
          <GoogleLogin
            className="GoogButton"
            clientId="137786288723-ljm6i4dkav5nb3h04dk4p9anm94mo3s3.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={response => {
              this.setState(() => {
                return { isLoggedIn: true };
              });
            }}
            onFailure={response => {
              this.setState(() => {
                return { isLoggedIn: false };
              });
            }}
          />
        ) : (
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={response => {
              this.setState(() => {
                return { isLoggedIn: false };
              });
            }}
          />
        )}
      </div>
    );
  }
}
export default App;
