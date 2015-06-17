var React = require('react');
var mui = require('material-ui');
// var Navigation = require('react-router').Navigation;

const RaisedButton = mui.RaisedButton;
const LeftNav      = mui.LeftNav;
const MenuItem     = mui.MenuItem;
const menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: '種類' },
  { route: 'dog', text: 'Dog' },
  { route: 'cat', text: 'Cat' },
  { route: 'other', text: 'Other' }
];

var AppLeftNav = React.createClass({
  // mixins: [Navigation],
    render() {
        return (
          <LeftNav
            ref="leftNav"
            docked={false}
            isInitiallyOpen={false}
            menuItems={menuItems}
            onChange={this.onChangeHandler}
            />
        );
    },
    toggle : function() {
      this.refs.leftNav.toggle();
    },
    onChangeHandler: function(e, selectedIndex, menuItem){
      console.log(e);
      console.log(selectedIndex);
      console.log(menuItem);
      // this.replaceWith(menuItem.route)
    }
});

module.exports = AppLeftNav;
