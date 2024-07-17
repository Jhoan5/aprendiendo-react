import { Children, useState } from "react";
import "./App.css";
// Para entender el código es recomendable verlo como un Array
// de 9 posiciones y modificar su contenido, evitar verlo como
// un tablero u objeto, es un array que luego pasa
// a un objeto para mostrarse
const TURNS = { X: "X", O: "O" },
  WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  Square = ({ children, isSelect, updateBoard, index }) => {
    const className = `square ${isSelect ? "is-select" : ""}`,
      handleClick = () => updateBoard(index);
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    );
  },
  checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      // Verificamos si en la posición [a] de la matriz que recibimos como parámetro
      // hay un valor que no es nulo y es igual a los valores de las posiciones [b] y [c]
      // es decir, si hay un ganador en esa iteración de la combinación de posiciones.
      if (
        boardToCheck[a] !== null &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        // En este caso, la función retorna el valor que se encuentra en la posición [a]
        // del tablero recibido como parámetro, es decir, el jugador que ganó.

        return boardToCheck[a];
      }
    }
    return null;
  },
  checkEndGame = (newBoard) => newBoard.every((square) => square !== null),
  WinnerModal = ({ winner, resetGame }) => {
    if (winner === null) return null;

    const winnerText = winner === false ? "Empate" : "Ganó:";

    return (
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>

          <header className="win">{winner && <Square>{winner}</Square>}</header>

          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
    );
  };
function App() {
  const [board, setBoard] = useState(Array(9).fill(null)),
    [turn, setTurn] = useState(TURNS.X),
    [winner, setWinner] = useState(null),
    resetGame = () => {
      setBoard(Array(9).fill(null));
      setTurn(TURNS.X);
      setWinner(null);
    },
    updateBoard = (index) => {
      if (board[index] || winner) return;
      const newBoard = [...board],
        newTurn = turn === TURNS.X ? TURNS.O : TURNS.X,
        newWinner = checkWinnerFrom(newBoard);
      console.log(newBoard);
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(newTurn);
      if (newWinner) {
        setWinner(newWinner);
      } else if (checkEndGame(newBoard)) {
        setWinner(false); // empate
      }
    };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
