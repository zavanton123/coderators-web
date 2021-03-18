import React from 'react';
import {NavigationHeader} from "./features/common/Header";
import {Route, Switch} from 'react-router-dom';
import {SnippetList} from "./features/snippets/SnippetList";
import {TagList} from "./features/tags/TagList";
import {Container} from "reactstrap";

function App() {
  return (
    <>
      <NavigationHeader/>
      <Container>
        <h1>Coderators</h1>
        <Switch>
          <Route exact path="/" component={SnippetList}/>
          <Route exact path="/tags/" component={TagList}/>
        </Switch>
      </Container>
    </>
  );
}

export default App;
