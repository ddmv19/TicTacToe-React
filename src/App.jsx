import { useState } from 'react'
import { CircleIcon, CrossIcon, LogoGame, ResetIcon } from './components/Icons'
import '@fontsource/kalam/700.css'
import { Square } from './components/Square'
import { checkEndGame, checkWinner } from './utils/helpers'
import { Modal } from './components/Modal'
import confetti from 'canvas-confetti'
import { ChangeTheme } from './components/ChangeTheme'

function App() {
  const [turn, setTurn] = useState('X')

  const [board, setBoard] = useState(Array(9).fill(null))

  const [winner, setWinner] = useState(null)

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      setTurn((prevTurn) => (prevTurn === 'X' ? 'O' : 'X'))
      const newWinner = checkWinner(newBoard)
      const endGame = checkEndGame(newBoard)
      if (newWinner) {
        confetti()
        setWinner(newWinner)
      } else if (endGame) {
        setWinner(false)
      }
    }
  }

  return (
    <main>
      <header className="flex flex-row">
        <h1 className="flex flex-row items-center justify-center text-slate-800 font-bold py-3 border-b-4 border-black text-center mb-10 flex-1 pr-4 dark:text-slate-300 dark:border-slate-400">
          <span
            className="flex-1 ml-36 text-3xl"
            style={{ fontFamily: 'Kalam' }}
          >
            Tic Tac Toe Game
          </span>
          <ChangeTheme />
        </h1>
      </header>
      <section className="flex flex-row items-center justify-evenly px-6">
        <LogoGame className={'w-12 h-auto '} />
        <div
          className="flex flex-row bg-blue-400 rounded-md items-center gap-3 py-3 px-5 dark:bg-[#1F3540]"
          id="turn"
        >
          {turn === 'X' ? (
            <CrossIcon
              className={'text-red-600 font-extrabold dark:text-[#ACC1CD]'}
            />
          ) : (
            <CircleIcon
              className={'text-blue-600 font-extrabold dark:text-[#ACC1CD]'}
            />
          )}
          <span className="uppercase tracking-widest font-bold text-xl dark:text-slate-100">
            Turn
          </span>
        </div>
        <div
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors dark:bg-[#A8BEC9]"
          onClick={resetBoard}
          id="reset"
        >
          <ResetIcon className={'w-8 h-auto dark:text-[#243B45]'} />
        </div>
      </section>
      <section className="w-fit max-w-[550px] m-auto flex flex-row gap-6 flex-wrap items-center justify-center mt-8 border border-black">
        {board.map((element, index) => (
          <Square
            value={element}
            updateBoard={updateBoard}
            dataId={index}
            key={index}
          />
        ))}
      </section>
      <Modal winner={winner} resetBoard={resetBoard} />
    </main>
  )
}

export default App
