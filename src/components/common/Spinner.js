import React, { Component } from "react";
import classnames from "classnames";

class Spinner extends Component {
  render() {
    return (
      <div
        className={classnames("loading lds-dual-ring ", {
          hiddenclass: !this.props.isLoading
        })}
      />
    );
  }
}

export default Spinner;
