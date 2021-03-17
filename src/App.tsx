import React from 'react';
import {NavigationHeader} from "./features/common/Header";
import {Route, Switch} from 'react-router-dom';
import {SnippetList} from "./features/snippets/SnippetList";
import {TagList} from "./features/tags/TagList";

function App() {
  return (
    <>
      <NavigationHeader/>
      <h1>Coderators</h1>

      <Switch>
        <Route exact path="/" component={SnippetList}/>
        <Route exact path="/tags/" component={TagList}/>
      </Switch>
    </>
  );
}

export default App;
