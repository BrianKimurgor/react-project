var React = require('react');
var ListItem = require('./listItem.jsx');

var List = React.createClass({
    render: function() {
        var createItem = function(text, index) {
            return React.createElement(ListItem, { key: index + text, text: text });
        };

        return React.createElement('ul', null, this.props.items.map(createItem));
    }
});

module.exports = List;
