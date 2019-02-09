import { GET_LOCATION_FORCAST } from "../actions/types";

const initialState = {
  forcasts: [],
  title: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION_FORCAST: {
      return {
        ...state,
        forcasts: action.payload,
        title: action.title
      };
    }
    default:
      return state;
  }
}
