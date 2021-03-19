import React from 'react';
import {Navigation} from "../features/common/Navigation";
import {Route, Switch} from 'react-router-dom';
import {SnippetList} from "../features/snippets/SnippetList";
import {TagList} from "../features/tags/TagList";
import {CategoryList} from "../features/categories/CatetoryList";
import {Feedback} from "../features/feedback/Feedback";
import {Login} from "../features/authentication/Login";
import {Register} from "../features/authentication/Register";
import {Footer} from "../features/common/Footer";
import "./Main.css";
import ErrorBoundary from "../features/common/ErrorBoundary";
import {SnippetDetail} from "../features/snippets/SnippetDetail";
import {AddSnippet} from "../features/snippets/AddSnippet";

function App() {
  return (
    <ErrorBoundary>
      <div className="page-container">
        <main className="content-wrap">
          <Navigation/>
          <Switch>
            <Route exact path="/" component={SnippetList}/>
            <Route exact path="/snippets/add" component={AddSnippet}/>
            <Route exact path="/snippets/:snippetId" component={SnippetDetail}/>
            <Route exact path="/categories/" component={CategoryList}/>
            <Route exact path="/tags/" component={TagList}/>
            <Route exact path="/feedback" component={Feedback}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    </ErrorBoundary>
  );
}

export default App;
