/** @jsx React.DOM */

var React = require('react/addons');
var Button = require('./generic/button')

var Code = React.createClass({
  getInitialState: function() {
    return {
      code: 'moment ..'
    }
  },

  componentDidMount: function() {
    var step = function() {
      var seed = base32ToBase16(this.props.code.toUpperCase())
      var step = Math.round(Date.now() / (1000 * 30))

      this.setState({code: hotp(seed, step, 'dec6')})
    }.bind(this)

    step()
    setTimeout(step, 10000)
  },

  render: function() {
    var code = this.state.code

    return (
      <div>{code} <Button onClick={this.handleDelete}>Delete</Button></div>
    )
  },

  handleDelete: function() {
    console.log(this.props)
    this.props.deleteCode(this.props.code)
  }
});

module.exports = Code
