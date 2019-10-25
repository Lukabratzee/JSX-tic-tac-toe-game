{
	/* # Fixing notes
## What
These are a bunch of notes left by Jake, on future additions / changes that should be made to the project.
 
## Square
Let me ask you a question, if a square is clicked and there's no other squares around to hear it, how will they know that another's been clicked?
 
You squares don't have any way of communicating. In the original, they had access to the setting the boards state.
Board, in the original, would contain the value of each square ( x, o, null ), then pass a function to all for that to be changed, down to the square.
 
Consider:
```javascript
class Square extends React.Component{
  constructor(){
    super(props);
  }
 
  render(){
    return (
      <button onClick={this.props.onClick}>
        { this.props.value }
      </button>
    );
  }
}
 
class Board extends React.Component{
  constructor(){
    this.state = {
      squares : [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      xIsNext : true
    }
  }
 
  squareClick( i ){
    //Squares is now a COPY of this.state.squares. One does not mutate state directly;
    const squares = [...this.state.squares];
    squares[i] = this.state.xIsNext ? "X" : "O";
    const xIsNext = !this.state.xIsNext;
    this.setState({ xIsNext, squares });
  }
 
  renderSquare( i ){
    const onClick = () => {
      this.squareClick( i );
    };
 # Fixing notes
## What
These are a bunch of notes left by Jake, on future additions / changes that should be made to the project.
 
## Square
Let me ask you a question, if a square is clicked and there's no other squares around to hear it, how will they know that another's been clicked?
 
You squares don't have any way of communicating. In the original, they had access to the setting the boards state.
Board, in the original, would contain the value of each square ( x, o, null ), then pass a function to all for that to be changed, down to the square.
 
Consider:
```javascript
class Square extends React.Component{
  constructor(){
    super(props);
  }
 
  render(){
    return (
      <button onClick={this.props.onClick}>
        { this.props.value }
      </button>
    );
  }
}
 
class Board extends React.Component{
  constructor(){
    this.state = {
      squares : [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      xIsNext : true
    }
  }
 
  squareClick( i ){
    //Squares is now a COPY of this.state.squares. One does not mutate state directly;
    const squares = [...this.state.squares];
    squares[i] = this.state.xIsNext ? "X" : "O";
    const xIsNext = !this.state.xIsNext;
    this.setState({ xIsNext, squares });
  }
 
  renderSquare( i ){
    const onClick = () => {
      this.squareClick( i );
    };
 
    return (
      <Square onClick={onClick} value={this.state.squares[i]}/>
    );
  };
 
  render(){
    return (
      <div>
        { this.renderSquare(0) }
        { this.renderSquare(1) }
        { this.renderSquare(2) }
        { this.renderSquare(3) }
        { this.renderSquare(4) }
        { this.renderSquare(5) }
        { this.renderSquare(6) }
        { this.renderSquare(7) }
        { this.renderSquare(8) }
      </div>
    );
  }
}
```
 
Where is any state kept? Where are the only changing valuables? Where is everything stored?
( Don't try and run that code, i haven't checked to see if it works )
 
## An exercise
Try and have a tiny app.
You have 2 components : Container and Cookie.
Cookie is rendered by Container.
 
Container contains, in it's state, how many times the cookie has been clicked.
Cookie displays that value, but does not hold it in it's own state. It only accesses it through props.
 
Solve this and you'll make leaps at solving the initial problem.
    return (
      <Square onClick={onClick} value={this.state.squares[i]}/>
    );
  };
 
  render(){
    return (
      <div>
        { this.renderSquare(0) }
        { this.renderSquare(1) }
        { this.renderSquare(2) }
        { this.renderSquare(3) }
        { this.renderSquare(4) }
        { this.renderSquare(5) }
        { this.renderSquare(6) }
        { this.renderSquare(7) }
        { this.renderSquare(8) }
      </div>
    );
  }const
}
```
 
Where is any state kept? Where are the only changing valuables? Where is everything stored?
( Don't try and run that code, i haven't checked to see if it works )
 
## An exercise
Try and have a tiny app.
You have 2 components : Container and Cookie.
Cookie is rendered by Container.
 
Container contains, in it's state, how many times the cookie has been clicked.
Cookie displays that value, but does not hold it in it's own state. It only accesses it through props.
 
Solve this and you'll make leaps at solving the initial problem. */
}

//////////////////////////////////////


<input id="demo" type="button" value="clickme" onclick="cookie(xClicked);"/>

// The cookie DISPLAYS BUT DOES NOT CONTAIN HOW MANY TIMES IT HAS BEEN CLICKED.
function cookie(xClicked) {
  
	xView = container(xClicked);
    return xView
}

// The container CONTAINS BUT DOES NOT DISPLAY HOW MANY TIMES THE COOKIE HAS BEEN CLICKED.
function container() {
	var xClicked = null;

	xClicked = isNaN(xClicked) ? 0 : xClicked;
	xClicked++;

	return xClicked;
}

onClick={cookie(xClicked)
}

