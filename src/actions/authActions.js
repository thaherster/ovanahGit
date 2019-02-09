import { ERROR_DISPATCH, SET_CURRENT_USER } from "./types";

//Login User
export const loginUser = (userData, history) => dispatch => {
  console.log(userData.email + " " + userData.password);

  if (userData.password[0] === "ovanah") {
    //save useremail to local store
    localStorage.setItem("jwtToken", userData.email[0]);
    dispatch(setCurrentUser(userData.email[0]));
  } else {
    const msg = {
      login: "Invalid  password | ovanah "
    };
    dispatch({
      type: ERROR_DISPATCH,
      payload: msg
    });
  }
};

//Set login user

export const setCurrentUser = token => {
  return {
    type: SET_CURRENT_USER,
    payload: token
  };
};

//logout user

export const logoutUser = () => dispatch => {
  //Remove token from local storage
  localStorage.removeItem("jwtToken");
  //Remove
  dispatch(setCurrentUser({}));
};
