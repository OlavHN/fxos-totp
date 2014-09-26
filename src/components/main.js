/** @jsx React.DOM */

var React = require('react/addons');

var Totp = require('./totp');

window.React = React;

React.renderComponent(
  <Totp />,
  document.getElementById('content')
);
