var React = require('react');
var mui = require('material-ui');
var CircularProgress = mui.CircularProgress;
var PetList = require('./pet-list.jsx')
var Spacing = mui.Styles.Spacing;

var Dog = React.createClass({
  getInitialState: function () {
    return {
      pets: [],
      isLoading: true
    };
  },
  componentDidMount: function () {
    console.log('componentDidMount');
    var url = 'http://140.121.197.135:11116/Animal/Animal?type=1';
    var self = this;

    $.ajax({
      type: "GET",
      url: url,
      success: function (result) {
        console.log(result);
        if (self.isMounted()) {
          self.setState({
            pets: result
          });
        }
        self.setState({
          isLoading: false
        });
      }
    });
  },
  render: function () {
    var rootStyle = {
      paddingTop: Spacing.desktopKeylineIncrement
    };

    if (this.state.isLoading) {
      var style = {
        paddingTop: Spacing.desktopKeylineIncrement*1.5,
        textAlign: 'center',
        margin: '0 auto'
      }
      return (
        <div style={style}>
          <CircularProgress mode="indeterminate"/>
        </div>
      );
    }

    return (
      <div style={rootStyle}>
        <PetList pets={this.state.pets}/>
      </div>
    );

  }
});

module.exports = Dog;
