import { useState } from 'react'
import './App.css'
const TURNS: object = { X: 'X', O: 'O' }
const WINNER_COMBOS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
type squareProps = {
  children: JSX.Element
  isSelect: boolean
  updateBoard: (index: number) => void
  index: number
}
const Square = ({ children, isSelect, updateBoard, index }: squareProps) => {
    const className = `square ${isSelect ? 'is-select' : ''}`,
      handleClick = () => updateBoard(index)
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  },
  checkWinnerFrom = (boardToCheck: Array<string | null>) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] !== null &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }
const checkEndGame = (newBoard: Array<string | null>) =>
    newBoard.every((square) => square !== null),
  WinnerModal = ({
    winner,
    resetGame
  }: {
    winner: boolean | null
    resetGame: () => void
  }) => {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó:'

    return (
      <section className='winner'>
        <div className='text'>
          <h2>{winnerText}</h2>

          <header className='win'>{winner && <Square>{winner}</Square>}</header>

          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
    )
  }
function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board],
      newTurn = turn === TURNS.X ? TURNS.O : TURNS.X,
      newWinner = checkWinnerFrom(newBoard)
    console.log(newBoard)
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App

