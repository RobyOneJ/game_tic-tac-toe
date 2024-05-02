import { useState } from 'react';

/* 1. The first line defines a 'function called Square'. 
The 'export' JavaScript keyword makes this function accessible outside of this file. 
The 'default' keyword tells other files using your code that it’s the main function in your file.*/

/* 2. The second line returns a 'button'. 
The 'return' JavaScript keyword means whatever comes after is returned as a value to the caller of the function. 
<button> is a JSX element. 
A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. 
className="square" is a button property or 'prop' that tells CSS how to style the button. 
X is the text displayed inside of the button and </button> closes the JSX element to indicate that any following content shouldn’t be placed inside the button. */

//13. following from 12.:
//function Square() {
//  return <button className="square">1</button>;
//}

//16. refactoring the above due to step 14 - adding props: function Square({ value }) indicates the Square component can be passed a prop called value
// Now you want to display that value instead of 1 inside every square, and render the JS variable called value from your component by using the curly braces.
// at this point, each square in your board will be blank cuz the Board component hasn't passed the 'value' prop to each Square component.
// to fix it, add 'value' prop to each Square component rendered by the Board comp:
/*function Square({ value }) {

  return <button className="square">{value}</button>;

}*/

//19. following from step18:

/*function Square({ value }) {
  function handleClick() {
    console.log('clicked');
  }

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  );
}*/

//21. following from step 20.
// value stores the value and setValue is a function that can be used to change the value.
// The null passed to useState is used as the initial value for this state variable, so value here starts off equal to null
// Since the Square component no longer accepts props anymore, you’ll remove the value prop from all nine of the Square components created by the Board component:

/*function Square() {
  const [value, useState] = useState(null);
  
  function handleClick() {
    console.log('clicked');
  }

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  );
}*/

//23. following from ste22:
// Now you’ll change Square to display an “X” when clicked. 
// Replace the console.log("clicked!"); event handler with setValue('X');. 
// By calling this 'set' function from an 'onClick' handler, you’re telling React to re-render that 'Square' whenever its <button> is clicked. 
// After the update, the Square’s 'value' will be 'X', so you’ll see the “X” on the game board.
// Each Square has its own state: the value stored in each Square is completely independent of the others. 
// When you call a set function in a component, React automatically updates the child components inside too

/*function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  );
}*/

//27. following from 26:
// Each Square will now receive a 'value' prop that will either be 'X', 'O', or 'null' for empty squares.

/*function Square({value}) {
  
  return (
    <button className="square">{value}</button>
  );
}*/

//28. Next, you need to change what happens when a 'Square' is clicked.
//The 'Board' component now maintains which squares are filled.
//You’ll need to create a way for the 'Square' to update the 'Board’s' state. 
//Since state is private to a component that defines it, you cannot update the 'Board’s' state directly from 'Square'.
//Instead, you’ll pass down a function from the 'Board' component to the 'Square' component, and you’ll have 'Square' call that function when a square is clicked.
//You’ll start with the function that the Square component will call when it is clicked. You’ll call that function onSquareClick:
//Next, you’ll add the onSquareClick function to the Square component’s props

function Square({ value, onSquareClick }) {

  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}



//3. React components need to return a single JSX element and not multiple adjacent JSX elements like two buttons. 
//4. To fix this you can use Fragments (<> and </>) to wrap multiple adjacent JSX elements

//5. The squares are all in a single line, not in a grid with the code below.
//6. To fix it, you need to group the squares into rows with 'divs' and add some CSS classes.
//7. Give each square a number to make sure you kow where each square is displayed
/*return (
  <>
     <button className="square">X</button>;
     <button className="square">X</button>;
     <button className="square">X</button>;
     <button className="square">X</button>;
     <button className="square">X</button>;
     <button className="square">X</button>;
     <button className="square">X</button>;
     <button className="square">X</button>;
     <button className="square">X</button>;
  </>
);
  
}*/

//8. refactoring the above code to return a grid
//9. renaming the function component from 'Square'to 'Board' since not longer a square

/*return (
  <>
    <div className="board-row">
      <button className="square">1</button>
      <button className="square">2</button>
      <button className="square">3</button>
    </div>
    <div className="board-row">
      <button className="square">4</button>
      <button className="square">5</button>
      <button className="square">6</button>
    </div>
    <div className="board-row">
      <button className="square">7</button>
      <button className="square">8</button>
      <button className="square">9</button>
    </div>
  </>
);
}*/

//10. Next, you’ll want to change the value of a square from empty to “X” when the user clicks on the square
//11. Instead of copy-pasting 9 times, React’s component architecture allows you to create a reusable component to avoid messy, duplicated code.
//12. You need to create a new component: function Square() - see above step 13

//14. Then you’ll update the Board component to render that Square component using JSX syntax
/*return (
  <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />      
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />      
    </div>
  </>
);
}*/

//15. now the squares says '1', to fix it, use 'props' to pass the value each square shouold have from the parent component (Boad) to its child (Square)

//17. follow from 16.:
/*return (
  <>
    <div className="board-row">
      <Square value='1' />
      <Square value='2' />
      <Square value='3' />
    </div>
    <div className="board-row">
      <Square value='4' />
      <Square value='5' />
      <Square value='6' />
    </div>
    <div className="board-row">
      <Square value='7' />
      <Square value='8' />
      <Square value='9' />
    </div>
  </>
);
}*/

//22. following from step21:
/*export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}*/


// 18. Making an interactive comp: Let’s fill the Square component with an X when you click it. 
// Declare a function called handleClick inside of the Square
// Then, add onClick to the props of the button JSX element returned from the Square

//20. As a next step, you want the Square component to “remember” that it got clicked, and fill it with an “X” mark. 
//To “remember” things, components use 'state' (useState).
//Let’s store the current value of the Square in state, and change it when the Square is clicked.
//a. First let's import useState at the top of the file.
//b. Remove the 'value' prop from the Square component.
//c. Add a new line at the start of the Square that calls useState.
//d. Have it return a state variable called value

//24. Lifting state up:
// To check for a winner in a tic-tac-toe game, the 'Board' would need to somehow know the state of each of the 9 'Square' components.
// the best approach is to store the game’s state in the parent 'Board' component instead of in each 'Square'
// The 'Board' component can tell each 'Square' what to display by passing a 'prop', like you did when you passed a number to each Square.
// NB: To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. 
// The parent component can pass that state back down to the children via props.
// This keeps the child components in sync with each other and with their parent.
// So, edit the 'Board' component so that it declares a state variable named 'squares' that defaults to an array of 9 nulls corresponding to the 9 squares:
//Array(9).fill(null) creates an array with nine elements and sets each of them to null. 
//The useState() call around it declares a squares state variable that’s initially set to that array
//The useState() call around it declares a squares state variable that’s initially set to that array
//When you fill the board in later, the squares array will look like this: ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

/*export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));*/

//25. Now your Board component needs to pass the 'value' prop down to each 'Square' that it renders:
/*return (
  <>
    <div className="board-row">
      <Square value={squares[0]}/>
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
    </div>
  </>
);
}*/

//26. Next, you’ll edit the Square component to receive the value prop from the Board component.
// This will require removing the Square component’s own stateful tracking of 'value' and the button’s 'onClick' prop

//29. Now you’ll connect the onSquareClick prop to a function in the Board component that you’ll name handleClick
//To connect onSquareClick to handleClick you’ll pass a function to the onSquareClick prop of the first Square component:

/*return (
  <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={handleClick}/>
      <Square value={squares[1]} onSquareClick={handleClick}/>
      <Square value={squares[2]} onSquareClick={handleClick}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={handleClick}/>
      <Square value={squares[4]} onSquareClick={handleClick}/>
      <Square value={squares[5]} onSquareClick={handleClick}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={handleClick}/>
      <Square value={squares[7]} onSquareClick={handleClick}/>
      <Square value={squares[8]} />
    </div>
  </>
);
}*/


//30. Lastly, you will define the handleClick function inside the Board component to update the squares array holding your board’s state:
//The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method.
//Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
//Calling the setSquares function lets React know the state of the component has changed. 
//This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).

/*export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick}/>
        <Square value={squares[4]} onSquareClick={handleClick}/>
        <Square value={squares[5]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick}/>
        <Square value={squares[7]} onSquareClick={handleClick}/>
        <Square value={squares[8]} />
      </div>
    </>
  );
  }*/

//31. Your handleClick function is hardcoded to update the index for the upper left square (0).
//Let’s update handleClick to be able to update any square
// Add an argument i to the handleClick function that takes the index of the square to update

/*export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
 
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }
 
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick}/>
        <Square value={squares[4]} onSquareClick={handleClick}/>
        <Square value={squares[5]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick}/>
        <Square value={squares[7]} onSquareClick={handleClick}/>
        <Square value={squares[8]} />
      </div>
    </>
  );
  }*/


//32. Next, you will need to pass that i to handleClick. 
//You could try to set the onSquareClick prop of square to be handleClick(0) directly in the JSX like this:
//<Square value={squares[0]} onSquareClick={handleClick(0)} />,  but it won’t work.

/*export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }
  // let's use a arrow function
  //When the square is clicked, the code after the => “arrow” will run, calling handleClick(0)
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}*/

//33. Taking turns: the “O”s cannot be marked on the board right now, only the 'X's
  // You’ll set the first move to be “X” by default.
  // Let’s keep track of this by adding another piece of state to the Board component:
  /*export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));*/

  // So with the new state above, each time a player moves, xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved. 
    //You’ll update the Board’s handleClick function to flip the value of xIsNext.
    //You also need to check if a value already exists in the square so it won't be overwritten.
      //If the square is already filled, you will return in the handleClick function early—before it tries to update the board state.

    /*function handleClick(i) {
      if (squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
    
    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
  }*/

  //35. Declaring a winner - calculateWinner function
 //To do this you’ll add a helper function called calculateWinner that takes an array of 9 squares, checks for a winner and returns 'X', 'O', or null as appropriate
 //(Note: This function is not specific to React)

 /*export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

 function handleClick(i) {
  if (squares[i] || calculateWinner(squares)) {
    return;
  }
  const nextSquares = squares.slice();
  if (xIsNext) {
    nextSquares[i] = "X";
  } else {
    nextSquares[i] = "O";
  }
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
}

return (
  <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </>
);
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}*/

//36. To let the players know when the game is over, you can display text such as “Winner: X” or “Winner: O”
  //To do that you’ll add a status section to the Board component.
  //The status will display the winner if the game is over and if the game is ongoing you’ll display which player’s turn is next

  export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
  
   function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner; //tells who won
  } else if (squares.every((square) => square)) { //add a tie
    status = "It is a tie!"
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O'); // keeps playing
  } 
  
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
