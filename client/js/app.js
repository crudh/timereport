const React = require("react");
const Router = require("react-router");
const { Route, DefaultRoute, NotFoundRoute, RouteHandler,  Link } = Router;
const NotFoundView = require("./core/notfoundview");
const IndexView = require("./indexview");
const TasksView = require("./tasks/tasksview");

const App = React.createClass({
    render() {
        return (
          <div>
            <div>
              <Link to="tasks">Tasks</Link>
            </div>
            <RouteHandler/>
          </div>
        );
    }
});

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={IndexView}/>
    <Route name="tasks" path="tasks" handler={TasksView}/>
    <NotFoundRoute handler={NotFoundView}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
  React.render(<Handler/>, document.getElementById("main"));
});

module.exports = App;
