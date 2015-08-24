import "babelify/polyfill";
import "whatwg-fetch";
import "./core/flux/flux";

import React from "react";
import Router, {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} from "react-router";
import NotFoundView from "./core/notfoundview";
import IndexView from "./indexview";
import TasksView from "./tasks/tasksview";

const App = React.createClass({
  render() {
    return (
      <div>
        <div>
          <Link to="index">Main</Link>
          <Link to="tasks">Tasks</Link>
        </div>
        <RouteHandler/>
      </div>
    );
  }
});

const routes = (
  <Route handler={App}>
    <DefaultRoute name="index" handler={IndexView}/>
    <Route name="tasks" path="tasks" handler={TasksView}/>
    <NotFoundRoute handler={NotFoundView}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
  React.render(<Handler/>, document.getElementById("main"));
});

export default App;
