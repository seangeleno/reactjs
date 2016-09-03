var React = require('react');

var ListItems = React.createClass({

  render: function() {
    return <li><a>{this.props.item}</a></li>
  }

});

module.exports = ListItems;
