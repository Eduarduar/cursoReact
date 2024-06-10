import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './utils/constants.js'
import { checkWinner } from './js/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Board } from './components/Board.jsx'

export default function App() {

  const [board, setBoard] = useState(() => {
    const localBoard = window.localStorage.getItem('board')
    return localBoard ? JSON.parse(localBoard) : Array(9).fill(null)
  }) // Board state

  const [turn, setTurn] = useState(() => {
    const localTurn = window.localStorage.getItem('turn')
    return localTurn ?? TURNS.X
  }) // Current turn state

  // false: Draw, null: No winner, X or O: Winner
  const [winner, setWinner] = useState(null) // Winner state

  // Function to update the board
  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    if (!newBoard.includes(null)) {
      setWinner(false)
    }
  }

  const resetGame = () => { // Function to reset the game
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <>
      <main className="container mx-auto p-4 gap-3 flex flex-col">
        <h1 className="text-center font-bold text-white text-2xl">TIC TAC TOE</h1>
        <Board board={board} updateBoard={updateBoard} />
        <section className=' w-20 flex flex-row gap-3 mx-auto'>
          <Square isSelected={turn === TURNS.X} >X</Square>
          <Square isSelected={turn === TURNS.O} >O</Square>
        </section>

        <section className="flex flex-row gap-3 w-32 mx-auto">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-nowrap ml-2" onClick={resetGame} >
            Reset Game
          </button>
        </section>

        <WinnerModal winner={winner} resetGame={resetGame} />

      </main>
    </>
  )
}
