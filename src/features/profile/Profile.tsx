import React, {useEffect} from 'react';
import {PageHeader} from "../common/PageHeader";
import {Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {fetchProfile} from "./ProfileSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.profile.id);
  const username = useSelector((state: RootState) => state.profile.username);
  const email = useSelector((state: RootState) => state.profile.email);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <>
      <PageHeader title="Profile"/>
      <Container>
        <p>Id: {userId}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </Container>
    </>
  );
};
