import React, { Component } from "react";
import Today from "./Today";
import Forcast from "./Forcast";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ForcastTable extends Component {
  render() {
    const list = this.props.forcast.forcasts;
    const title = this.props.forcast.title;
    console.log(list);
    var indents = [];
    for (var i = 1; i < list.length; i++) {
      indents.push(<Forcast wether={list[i]} key="{i}" />);
    }

    return (
      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            <Today wether={list[0]} key="{0}" title={title} />
            {indents}
          </div>
        </div>
      </div>
    );
  }
}

ForcastTable.propTypes = {
  forcast: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forcast: state.forcast
});

export default connect(
  mapStateToProps,
  {}
)(ForcastTable);
