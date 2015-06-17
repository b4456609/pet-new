/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppLeftNav = require('./app-left-nav.jsx');
var { AppCanvas, AppBar } = mui;

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  _onLeftIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  },

  render: function() {
    var title = 'Test';
    

    return (
      <AppCanvas>
        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={1}/>
        <AppLeftNav ref="leftNav" />
        <RouteHandler />
      </AppCanvas>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }

});

module.exports = Main;
