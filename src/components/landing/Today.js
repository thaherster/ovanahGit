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

class Today extends Component {
  render() {
    const wether = this.props.wether;

    console.log("Today");
    console.log(wether);
    var icon = [];

    switch (wether.weather_state_abbr) {
      case "c":
        icon.push(<img src={c} alt="" width="90" />);
        break;
      case "lc":
        icon.push(<img src={lc} alt="" width="90" />);
        break;
      case "lr":
        icon.push(<img src={lr} alt="" width="90" />);
        break;
      case "s":
        icon.push(<img src={s} alt="" width="90" />);
        break;
      case "sn":
        icon.push(<img src={sn} alt="" width="90" />);
        break;
      case "hr":
        icon.push(<img src={hr} alt="" width="90" />);
        break;
      case "sl":
        icon.push(<img src={sl} alt="" width="90" />);
        break;
      case "t":
        icon.push(<img src={t} alt="" width="90" />);
        break;
      case "hc":
        icon.push(<img src={hc} alt="" width="90" />);
        break;
      default:
        icon.push(<img src={c} alt="" width="90" />);
        break;
    }

    return (
      <div className="today forecast">
        <div className="forecast-header">
          <div className="day">{wether.weather_state_name}</div>
          <div className="date">{wether.applicable_date}</div>
        </div>
        <div className="forecast-content">
          <div className="location">{this.props.title}</div>
          <div className="degree">
            <div className="num">
              {wether.the_temp}
              <sup>o</sup>C
            </div>
            <div className="forecast-icon">{icon}</div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Today;
