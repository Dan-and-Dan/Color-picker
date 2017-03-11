var Child = require('./child.jsx');

var Parent = React.createClass({ 
    
    getInitialState: function() { 
        return {color: white}
    },
    
    changeColor: function(newColor) { 
        this.setState({ 
            color: newColor
        })
    },
    
    render: function() { 
        return (
            <Child 
                onChange={this.changeColor}
                color={this.state.color} />
        )
    }
})

ReactDOM.render(<Parent />, document.getElementById('app'));