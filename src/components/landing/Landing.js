import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Search from "../common/Search";
import ForcastTable from "./ForcastTable";
import Noresult from "../common/Noresult";

class Landing extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
    // if (nextProps.forcast.forcasts) {
    //   console.log(nextProps.forcast.forcasts);
    //   this.setState({ forcast: nextProps.forcast.forcasts });
    // }
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onLogoutClick.bind(this)}>Logout</button>
        </div>
        <Search />
        {this.props.forcast.forcasts.length > 0 ? (
          <ForcastTable />
        ) : (
          <Noresult />
        )}
      </div>
    );
  }
}
Landing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  forcast: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  forcast: state.forcast
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Landing);
