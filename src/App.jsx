import { useState } from 'react'
import { CircleIcon, CrossIcon, LogoGame, ResetIcon } from './components/Icons'
import '@fontsource/kalam/700.css'
import { Square } from './components/Square'
import { checkWinner } from './utils/helpers'
import { Modal } from './components/Modal'

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
      setWinner(checkWinner(newBoard))
    } else {
      return
    }
  }
  return (
    <main className="border">
      <h1
        className="text-3xl text-slate-800 font-bold py-3 border-b-4 border-black text-center mb-10"
        style={{ fontFamily: 'Kalam' }}
      >
        Tic Tac Toe Game
      </h1>
      <section className="flex flex-row items-center justify-evenly px-6">
        <LogoGame className={'w-12 h-auto'} />
        <div
          className="flex flex-row bg-blue-400 rounded-md items-center gap-3 py-3 px-5"
          style={{ boxShadow: '8px 10px 7px rgb(126, 195, 251)' }}
        >
          {turn === 'X' ? <CrossIcon /> : <CircleIcon />}
          <span className="uppercase tracking-widest font-bold text-xl">
            Turn
          </span>
        </div>
        <div
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors"
          style={{ boxShadow: '4px 8px 6px rgb(74, 172, 252)' }}
          onClick={resetBoard}
        >
          <ResetIcon className={'w-8 h-auto'} />
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
