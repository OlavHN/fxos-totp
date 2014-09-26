/** @jsx React.DOM */

require('./button.css');

var React = require('react/addons');

var Button = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <div className="button">{this.props.children}</div>
    );
  }
});

module.exports = Button;
