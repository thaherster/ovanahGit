import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Banner from "../../images/banner.png";
import { getCityCode } from "../../actions/forcastActions";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.getCityCode(this.state.search);
  }
  render() {
    return (
      <div className="hero" style={{ backgroundImage: "url(" + Banner + ")" }}>
        <div className="container">
          <form onSubmit={this.onSubmit} className="find-location">
            <input
              type="text"
              name="search"
              placeholder="Find your location..."
              value={this.state.search}
              onChange={this.onChange}
            />
            <input type="submit" value="Find" />
          </form>
        </div>
      </div>
    );
  }
}
Search.propTypes = {
  getCityCode: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getCityCode }
)(Search);
