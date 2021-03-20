import React, {useState} from 'react';
import {PageHeader} from "../common/PageHeader";
import {Button, Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, selectAccessToken, selectRefreshToken} from "./AuthenticationSlice";
import {Redirect} from 'react-router-dom';
import {LoginRequestParams} from "./AuthModels";
import {RootState} from "../../app/store";

export const Login = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);
  const loading = useSelector((state: RootState) => state.authentication.loading);
  const error = useSelector((state: RootState) => state.authentication.error);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  if (accessToken || refreshToken) {
    return <Redirect to='/'/>;
  }

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`zavanton - onSubmit: ${username} -> ${password}`);
    const loginParams: LoginRequestParams = {
      username: username,
      password: password
    };
    dispatch(loginUser(loginParams));
  };

  let message;
  if (loading) {
    message = <p>Logging in...</p>
  }

  if (error) {
    message = <p>Failed to login. Try again!</p>
  }

  return (
    <>
      <PageHeader title="Login"/>
      <Container>
        {message}
        <form onSubmit={onSubmit}>
          <label>Username</label>
          <br/>
          <input
            className="form-control"
            value={username}
            onChange={onUsernameChange}
            type="text"/>
          <br/>
          <label>Password</label>
          <br/>
          <input
            className="form-control"
            value={password}
            onChange={onPasswordChange}
            type="password"/>
          <br/>
          <div>
            <Button color="primary">Login</Button>
            <br/>
          </div>
        </form>
      </Container>
    </>
  );
};
