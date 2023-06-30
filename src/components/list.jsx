var react = require ('react');
var listItem = require('./listitem.jsx');


var ingredient = [{"id":1,"text":"ham"},{"id":2,"text": "cheese"}, {"id":3, "text": "peperoni"}]

var List = React.createClass({
    render: function(){
        var listItems = ingredient.map(function(item){
            return <listitem key = {items.id} ingredient ={item.text}/>;
        })

        return (<ul>{listItems}</ul>)
    }
});


module.exports = List;