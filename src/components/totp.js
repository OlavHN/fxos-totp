/** @jsx React.DOM */

var React = require('react/addons');

var Code = require('./code');
var HeaderPanel = require('./generic/header_panel');
var Header = require('./generic/header');
var Button = require('./generic/button')

var Totp = React.createClass({
  getInitialState: function() {
    return {
      codes: JSON.parse(window.localStorage.getItem('codes')) || []
    }
  },

  render: function() {
    var codes = this.state.codes;

    return (
      <HeaderPanel>
        <Header>
          <img className="header-logo" src="resources/logo.png" />
          Time-Based One-Time Password
        </Header>
        {codes.map(function(code) {
          return <Code code={code} deleteCode={this.handleDeleteCode} />
        }.bind(this))}
        <div>
          <input type="text" ref="codeInput" />
          <Button onClick={this.handleNewCode}>New code</Button>
        </div>
      </HeaderPanel>
    );
  },

  handleNewCode: function() {
    var code = this.refs.codeInput.getDOMNode().value
    var codes = this.state.codes

    codes.push(code)

    this.setState({
      codes: codes
    })

    window.localStorage.setItem('codes', JSON.stringify(codes))
  },

  handleDeleteCode: function(code) {
    var codes = this.state.codes.filter(function(x) {
      return code !== x
    })

    this.setState({
      codes: codes
    })

    localStorage.setItem('codes', JSON.stringify(codes))
  }

});

module.exports = Totp;
