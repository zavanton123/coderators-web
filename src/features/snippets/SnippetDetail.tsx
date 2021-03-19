import React from 'react';
import {PageHeader} from "../common/PageHeader";
import {useParams} from 'react-router-dom'
import {Container} from "reactstrap";

interface SnippetDetailParams {
  snippetId: number
}

export const SnippetDetail = () => {
  const params = useParams();
  const snippetParams = params as SnippetDetailParams;

  console.log(`zavanton - params`);
  console.log(params);

  return (
    <>
      <PageHeader title="Snippet Detail"/>
      <Container>
        <p>The id is {snippetParams.snippetId}</p>
      </Container>
    </>
  )
}