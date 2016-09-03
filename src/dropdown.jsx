  // We need to show a button and a list
  // This component should know when to show the list
  // based on when the user clicks on a button

  var React = require('react');
  var Button = require('./button');
  // var List = require('./list');

  module.exports = React.createClass({
    handleClick: function () {
      alert('button clicked from dropdown')
    },
    render: function() {
      var items = this.props.items.map(function (item) {
        return <li>{item}</li>
      });

      return <div className="dropdown">
        <Button
            whenClicked={this.handleClick}
            className="btn-default"
            title={this.props.title}
            subTitleClassName="caret"
            />
          <ul>{items}</ul>
      </div>
    }
  });
