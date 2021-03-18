import React from 'react';
import {Navigation} from "../common/Navigation";
import {Route, Switch} from 'react-router-dom';
import {SnippetList} from "../snippets/SnippetList";
import {TagList} from "../tags/TagList";
import {CategoryList} from "../categories/CatetoryList";
import {Feedback} from "../feedback/Feedback";
import {Login} from "../authentication/Login";
import {Register} from "../authentication/Register";
import {Footer} from "../common/Footer";
import "./Main.css";

function App() {
  return (
    <div className="page-container">
      <main className="content-wrap">
        <Navigation/>
        <Switch>
          <Route exact path="/" component={SnippetList}/>
          <Route exact path="/categories/" component={CategoryList}/>
          <Route exact path="/tags/" component={TagList}/>
          <Route exact path="/feedback" component={Feedback}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
