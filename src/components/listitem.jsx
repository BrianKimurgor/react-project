var react = require('react');
var listItem = React.createClass({
    render: function(){
        return(
            <li>
            <h4>{this.prompt.ingredient}</h4>
            </li>
        );
    }
});

module.exports = listItem;