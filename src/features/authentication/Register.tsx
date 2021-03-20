import React, {useState} from 'react';
import {PageHeader} from "../common/PageHeader";
import {Button, Container} from "reactstrap";
import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "./AuthenticationSlice";
import {Redirect} from "react-router-dom";

export const Register = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  if (isAuthenticated) {
    return <Redirect to='/'/>;
  }

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`zavanton - onSubmit: ${username} -> ${email} -> ${password}`);
  };

  return (
    <>
      <PageHeader title="Register"/>
      <Container>
        <form onSubmit={onSubmit}>
          <label>Username</label>
          <br/>
          <input
            className="form-control"
            value={username}
            onChange={onUsernameChange}
            type="text"/>
          <br/>
          <label>Email</label>
          <br/>
          <input
            className="form-control"
            value={email}
            onChange={onEmailChange}
            type="email"/>
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
            <Button color="primary">Register</Button>
            <br/>
          </div>
        </form>
      </Container>
    </>
  );
};
