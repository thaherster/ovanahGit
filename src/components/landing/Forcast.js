import React, { Component } from "react";

import lc from "../../images/icons/cloudnsun.svg";
import lr from "../../images/icons/cloudrain.svg";
import s from "../../images/icons/cloudrainsun.svg";
import c from "../../images/icons/fullsunny.svg";
import sn from "../../images/icons/mist.svg";
import hr from "../../images/icons/rainingheavy.svg";
import sl from "../../images/icons/snowfall.svg";
import t from "../../images/icons/thunder.svg";
import hc from "../../images/icons/twocloud.svg";
class Forcast extends Component {
  render() {
    const wether = this.props.wether;
    var icon = [];

    switch (wether.weather_state_abbr) {
      case "c":
        icon.push(<img src={c} alt="" width="48" />);
        break;
      case "lc":
        icon.push(<img src={lc} alt="" width="48" />);
        break;
      case "lr":
        icon.push(<img src={lr} alt="" width="48" />);
        break;
      case "s":
        icon.push(<img src={s} alt="" width="48" />);
        break;
      case "sn":
        icon.push(<img src={sn} alt="" width="48" />);
        break;
      case "hr":
        icon.push(<img src={hr} alt="" width="48" />);
        break;
      case "sl":
        icon.push(<img src={sl} alt="" width="48" />);
        break;
      case "t":
        icon.push(<img src={t} alt="" width="48" />);
        break;
      case "hc":
        icon.push(<img src={hc} alt="" width="48" />);
        break;
      default:
        icon.push(<img src={c} alt="" width="48" />);
        break;
    }
    return (
      <div className="forecast">
        <div className="forecast-header">
          <div className="day">{wether.applicable_date}</div>
        </div>
        <div className="forecast-content">
          <div className="day">{wether.weather_state_name}</div>
          <div className="forecast-icon">{icon}</div>
          <div className="degree">
            {Math.round(wether.max_temp * 100) / 100}
            <sup>o</sup>C
          </div>
          <small>
            {Math.round(wether.min_temp * 100) / 100}
            <sup>o</sup>
          </small>
        </div>
      </div>
    );
  }
}

export default Forcast;
