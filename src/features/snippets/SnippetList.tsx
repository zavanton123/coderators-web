import React, {useEffect} from 'react';
import {Container} from "reactstrap";
import {PageHeader} from "../common/PageHeader";
import {useDispatch, useSelector} from "react-redux";
import {loadSnippets, selectAllSnippets, snippetsLoadFail, snippetsLoading} from "./SnippetSlice";
import {Link} from 'react-router-dom';
import {Snippet} from "./models";


export const SnippetList = () => {

  const dispatch = useDispatch();
  const snippets = useSelector(selectAllSnippets)
  const loading = useSelector(snippetsLoading);
  const error = useSelector(snippetsLoadFail);

  useEffect(() => {
    dispatch(loadSnippets());
  }, []);

  let content = null

  if (loading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p>Load error...</p>
  }

  if (snippets && snippets.length > 0) {
    content = (
      <ul>
        {
          snippets.map((item) => {
            const snippet = item as Snippet;
            return (
              <li key={snippet.id}>
                <Link to={`/snippets/${snippet.id}`}>{(snippet as Snippet).title}</Link>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <>
      <PageHeader title="Snippets"/>
      <Container>
        <h1>Snippet list</h1>
        {content}
      </Container>
    </>
  );
}
