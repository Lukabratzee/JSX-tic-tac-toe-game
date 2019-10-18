import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    // constructor is a method that's automatically called during the creation of an object from a class.
    constructor(props) {
        // needs to be called before acessing 'this'. super should always be called when defining the constructor of a subclass.
        super(props);
        this.state = {
            value : "-",
            isClicked:false,
        };

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(){
        const isClicked = !this.state.isClicked;
        const value = isClicked ? "X" : "-";
        this.setState({ isClicked, value })
    }

	render() {
        return (
            <button 
            className="square" 
            onClick={ this.toggleState }>
                {this.state.value}
                {this.state.isClicked}
            </button>
        );
	}
}

  
  class Board extends React.Component {
	renderSquare(i) {
		return <Square value={i} />;
	}

	render() {
        const status = 'Next player: X';
        const rowCount = 3;
        const columnCount = 3;

        const rows = [...Array(rowCount)].map( ( _, rowIndex ) => {
            const columns = [...Array(columnCount)].map( (_, columnIndex ) => {
                const squareId = ( rowIndex * 3 ) + columnIndex;
                return this.renderSquare( squareId );
            });

            return (
                <div className="board-row">
                    { columns }
                </div>
            )
        });

		return (
			<div>
				<div className="status">{status}</div>
                { rows }
			</div>
		);
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
  