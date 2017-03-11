var Child = require('./child');

var Parent = React.createClass({ 
    
    getInitialState: function() { 
        return {color: 'white'};
    },
    
    changeColor: function(newColor) { 
        this.setState({ 
            color: newColor
        })
    },
    
    render: function() { 
        return (
            <div style={{backgroundColor:this.state.color, height:'400', width:'400'}} className="picker">
                <div className="container">
                <h1>The current color is: {this.state.color}</h1>
                <Child
                    onChange={this.changeColor}
                    color={this.state.color} />
                </div>
            </div>
        )
    }
})

ReactDOM.render(<Parent />, document.getElementById('app'));