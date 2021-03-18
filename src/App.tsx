import React from 'react';
import {NavigationHeader} from "./features/common/Header";
import {Route, Switch} from 'react-router-dom';
import {SnippetList} from "./features/snippets/SnippetList";
import {TagList} from "./features/tags/TagList";
import {Container} from "reactstrap";
import {CategoryList} from "./features/categories/CatetoryList";
import {Feedback} from "./features/feedback/Feedback";
import {Login} from "./features/authentication/Login";
import {Register} from "./features/authentication/Register";

function App() {
  return (
    <>
      <NavigationHeader/>
      <Container>
        <h1>Coderators</h1>
        <Switch>
          <Route exact path="/" component={SnippetList}/>
          <Route exact path="/categories/" component={CategoryList}/>
          <Route exact path="/tags/" component={TagList}/>
          <Route exact path="/feedback" component={Feedback}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </Container>
    </>
  );
}

export default App;
