//contains action creator method for authentication

import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";
import {apiUrl} from '../config';


//History is the browser navigation history which we will use for rotuing purpose
//Dispatch will be used to dispatch the actions. These actions will be go to thunk middleware
//This middleware will call the reducres accordingly
export const registerUser = (userData, history) => {
  return dispatch => {
    let registerUrl = `${apiUrl.baseUrl}${apiUrl.register}`;
    axios
      .post(registerUrl, userData)
      .then(res => history.push("/login"))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
};

export const loginUser = userData => dispatch => {
    axios
      .post("/api/users/login", userData)
      .then(res => {
        debugger;
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        
  // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
  
        
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };
      
  // Log user out
  export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    
      // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };
  
