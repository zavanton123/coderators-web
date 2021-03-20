import React, {useState} from 'react';
import {PageHeader} from "../common/PageHeader";
import {Button, Container} from "reactstrap";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`zavanton - onSubmit: ${username} -> ${password}`);
  };

  return (
    <>
      <PageHeader title="Login"/>
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
