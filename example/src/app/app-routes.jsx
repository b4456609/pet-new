
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Main = require('./components/main.jsx');
var Dog = require('./components/dog.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>

    <DefaultRoute handler={Dog}/>
  </Route>
);

module.exports = AppRoutes;
