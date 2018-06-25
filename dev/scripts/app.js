import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import firebase, { auth, provider } from './firebase.js';
import Clock from './Clock';
import Joke from './Joke';
import Weather from './Weather';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // default value of user to be null because on initial load, the client has not yet authenticated with Firebase and so, on initial load, our application should act as if they are not logged in.
      user: null
    };

    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });

    // put function for API call in here
    
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }


  render() {
    return (
      <div className="content">
        {this.state.user ?
        <div className="main">
          <header>
            <div className="userProfile">
              <img src={this.state.user.photoURL} alt="User's Photo" className="userPhoto"/>
            </div>
            <div className="logOut">
                <div className="signOut" onClick={this.logout}>SIGN OUT</div>
            </div>
          </header>
          <section>
            <Clock
              userName={this.state.user.displayName}
            />
            <Weather 
            
            />
          </section>
          <footer>
            <Joke/>
          </footer>
        </div>
        // end of div.main

        :
        // WILL SHOW IF NOT LOGGED ON
        <div className="logInScreen">
          <h2>Welcome back!</h2>
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
              <div className="text" onClick={this.login}>SIGN IN</div>
          </div>
        </div>
        }
        
      </div>
      // end of div.content
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
