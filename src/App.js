import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import { Link } from "react-router-dom";

import Login from "./components/auth/Login";
import Landing from "./components/landing/Landing";
import Spinner from "./components/common/Spinner";

import "./App.css";
import { setCurrentUser } from "./actions/authActions";
//Check for login token
if (localStorage.jwtToken) {
  //Set User & isAuthenticated
  store.dispatch(setCurrentUser(localStorage.jwtToken));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route path="/login" component={Login} />
            </div>
            <Spinner />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
