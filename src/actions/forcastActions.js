import { GET_LOCATION_FORCAST, ERROR_DISPATCH } from "./types";

import axios from "axios";

//get City Code
export const getCityCode = query => dispatch => {
  axios
    .get("/location/search/?query=" + query, {
      headers: { "Access-Control-Allow-Origin": "*" }
    })
    .then(res => {
      console.log(res.data[0].woeid);
      dispatch(getCityForcast(res.data[0].woeid));
    })
    .catch(err =>
      dispatch({
        type: ERROR_DISPATCH,
        payload: err
      })
    );
};

//Get City Forcast
//Set login user

export const getCityForcast = woeid => dispatch => {
  axios
    .get("/location/" + woeid, {
      headers: { "Access-Control-Allow-Origin": "*" }
    })
    .then(res => {
      dispatch({
        type: GET_LOCATION_FORCAST,
        payload: res.data.consolidated_weather,
        title: res.data.title
      });
    })
    .catch(err =>
      dispatch({
        type: ERROR_DISPATCH,
        payload: err
      })
    );
};
