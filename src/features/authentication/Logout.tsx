import React from 'react';
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from './AuthenticationSlice';

export const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logoutUser())
  return <Redirect to="/"/>
}
