import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    // constructor is a method that's automatically called during the creation of an object from a class.
    constructor(props) {
    // needs to be called before accessing 'this'. super should always be called when defining the constructor of a subclass.
    // calls constructor of parent class
    // constructor is needed here because we're using setState/modifying the variables. We construct the class, 
    // inherit the constructor from the parent class, and then we can alter variables in the class. 
    // if we are not changing anything, i.e just having a class displaying static or keeping static/immutable
    // then we don't need to do this e.g class Board, Class Game
      super(props);
      this.state = {
        value: null,
        isClicked:false,
        xIsNext:true,
      };
      this.toggleState = this.toggleState.bind(this);
    }

    toggleState(){
        const isClicked = !this.state.isClicked;
        const value = isClicked ? "X" : "O";
        const xIsNext = value;
        this.setState({ isClicked, value, xIsNext})
        
    }
  
    render() {
      return (
            // () => passes function as a property. In this case, on each click, alert is fired
            // if the function was not being passed, it would fire every time the component re-rendered
            // the function is called, literally, onclick, rather than not being told and just being called when it's created.
            // so by passing function using attributes and the resulting props, we can control when things happen based on context
        <button
          className="square"
          //   onClick={() => this.setState({value: 'X'})}

          // so we either pass an onclick function into setState,
          // or we incorporate setState and the other variables into
          // a function that we can call using onClick={this.toggleState}
          // a function pressed when a button is hit!
        onClick=
        { this.toggleState }>
        {this.state.value}
        
        
        </button>
        // this.state.value/isClicked are then used to ....update?

      );
    }
  }


           /*
                Dear Cumlord:
                    {} is a javascript object, that contains key : value pairs. Kinda like a database.
                    you can put as many keys in as you want. Like Value : "x", isClicked : true
                    this.setState({}), this.setState({}) was what was causing your program to crash.
                    I don't know what it did, but it sure did it.
            */




  // <Square [value[value]] means using a class. Square is a class, Board is a class
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // is this putting the boolean into squares? I think so.
        squares[i] = <Square xIsNext />;
        this.setState({squares: squares}) // how do we pull this out of the class and use it here?
         

    }
    renderSquare(i) {
      return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} />;
    }
  
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
        status = 'Next player: ' + <Square  xIsNext={this.state.squares ? 'X' : 'O'} />; // how do we pull this out of the class and use it here?

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
}
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  