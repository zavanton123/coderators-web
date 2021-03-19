import React, {useEffect} from 'react';
import {PageHeader} from "../common/PageHeader";
import {useParams} from 'react-router-dom'
import {Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {loadSnippetById} from "./SnippetSlice";
import {Snippet} from "./SnippetList";

interface SnippetDetailParams {
  snippetId: number
}

export const SnippetDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const currentSnippet = useSelector((state: RootState) => state.snippets.currentSnippet);

  useEffect(() => {
    const snippetParams = params as SnippetDetailParams;
    dispatch(loadSnippetById(snippetParams.snippetId));
  }, []);

  let content;

  if (currentSnippet) {
    const snippet = currentSnippet as Snippet
    content = (
      <p>{snippet.title}</p>
    )
  }

  return (
    <>
      <PageHeader title="Snippet Detail"/>
      <Container>
        {content}
      </Container>
    </>
  );
}
