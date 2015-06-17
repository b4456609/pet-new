var React = require('react');
var mui = require('material-ui');
var Navigation = require('react-router').Navigation;
var Spacing = mui.Styles.Spacing;

const Paper = mui.Paper;

var PetList = React.createClass({
  mixins: [Navigation],
  render: function () {
    console.log('PetList render');
    var ref = this;
    var style = {
      padding: Spacing.desktopGutterMini,
    }
    var paperStyle = {
      padding: Spacing.desktopGutterMini,
      marginBottom: Spacing.desktopGutterMini
    };

    var imgStyle = {
      width: '100%'
    }

    var textStyle = {
      padding: '5px 16px 5px 16px'
    }
    return (
      <div style={style}>
        {this.props.pets.map(function (pet, i) {
          return (
              <Paper key={i} onClick={ref.handleClick.bind(ref, i)} style={paperStyle} zDepth={1}>
                <img alt="boohoo" className="img-responsive" src={pet.ImageName} style={imgStyle}/>
                <div style={textStyle}>
                  <h3>性別: {pet.Sex}<br/>
                    動物種類: {pet.Type}<br/>
                    體型: {pet.Build}<br/>
                    年齡: {pet.Age}<br/>
                    品種: {pet.Variety}<br/>
                </h3>
                </div>
              </Paper>
          );
        })}
      </div>
    );
  },
  handleClick: function (i) {
    var pet = this.props.pets[i];
    console.log('You clicked: ');
    console.log(pet);
    localStorage.setItem("pet", JSON.stringify(pet));
    this.replaceWith('info');
  }
});

module.exports = PetList;
