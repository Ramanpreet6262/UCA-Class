// Project is Increment or Decrement counter on click of a button...

// We can use functions/event methods in 2 ways:
//1. Using function as normal and doing bind in constructor()
//2. Using arrow function and don't do binding in constructor()


import React,{Component} from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }

        this.increment = this.increment.bind(this);
    }

    increment(){                           // 1 way normal function and doing bind...
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {                    // 2 way arrow function and not doing bind...
        this.setState({count: this.state.count - 1});
    }

    clear = () => {
        this.setState({count: 0});
    }

    applyColor = () => {
        document.getElementById("counter").style.color="blue";
    }
    
    removeColor = () => {
        document.getElementById("counter").style.color="black";
    }
    
    changeValue = () => {
        let number = parseInt(document.getElementById("input").value);
        this.setState({count: number})
    }

    render(){
        return(
            <div>
                <p>Enter number to set value of counter</p>
                <input type="number" id="input" onKeyUp={this.changeValue}></input>
                <br></br>
                <h1 id="counter">
                    {this.state.count}
                </h1>
                <br></br>
                <br></br>
                <button onClick={this.increment}>
                    Increment Counter
                </button>
                <button onClick={this.decrement}>
                    Decrement Counter
                </button>
                <button onClick={this.clear}>
                    Clear Counter
                </button>
                <br></br>
                <br></br>
                <button onMouseOver={this.applyColor} onMouseOut={this.removeColor}>
                    Color
                </button>
            </div>
        );
    }
}

export default Counter;

