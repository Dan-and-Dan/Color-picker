var React = require('react');
var ReactDOM = require('react-dom');

var child = React.createClass({
    handleChange: function(event){
        var color = event.target.value;
        this.props.onChange(color);
    },
    render: function(){
        <div>
            <select onChange={this.handleChange}>
                <option value="orange">Orange</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
                <option value="grey">Grey</option>
                <option value="purple">Purple</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="mediumseagreen">Medium Sea Green</option>
                <option value="lightblue">Light Blue</option>
                <option value="crimson">Crimson</option>
                <option value="goldenrod">Goldenrod</option>
                <option value="aqua">Aqua</option>
                <option value="cadetblue">Cadet Blue</option>
                <option value="chartreuse">Chartruese</option>
                <option value="darkmagenta">Dark Magenta</option>
                <option value="darkolivegreen">Dark Olive Green</option>
                <option value="deeppink">Deep Pink</option>
                <option value="forestgreen">Forest Green</option>
                <option value="bisque">Bisque</option>
            </select>
        </div>
    }
})

module.exports = child;