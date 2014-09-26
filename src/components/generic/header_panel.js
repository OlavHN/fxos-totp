/** @jsx React.DOM */

require('./header_panel.css');

var React = require('react/addons');

var HeaderPanel = React.createClass({
  render: function() {
    console.log(this.props.children);
    var header = this.props.children[0];
    var contents = this.props.children.slice(1);
    return (
      <div className="panel">
        {header}
        <div className="content-panel">
          <div className="content-container">
            {contents}
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
});

module.exports = HeaderPanel;
