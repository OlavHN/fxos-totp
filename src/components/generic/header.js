/** @jsx React.DOM */
require('./header.css');

var React = require('react/addons');

var Header = React.createClass({
  render: function() {
    return <div className="header">{this.props.children}</div>
  }
});

module.exports = Header;
