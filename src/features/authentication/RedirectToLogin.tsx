import {Redirect, useRouteMatch} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "./AuthenticationSlice";
import React from "react";


export const RedirectToLogin = () => {
  const match = useRouteMatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Redirect to={{
      pathname: '/login',
      state: {
        from: match.url
      }
    }}/>
  } else {
    return null
  }
}
