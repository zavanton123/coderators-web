import React, {useEffect} from 'react';
import {Container} from "reactstrap";
import {PageHeader} from "../common/PageHeader";
import {useDispatch} from "react-redux";
import {loadSnippets} from "./SnippetSlice";


export const SnippetList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSnippets());
  }, []);

  return (
    <>
      <PageHeader title="Snippets"/>
      <Container>
        <h1>Snippet list</h1>
      </Container>
    </>
  );
}
