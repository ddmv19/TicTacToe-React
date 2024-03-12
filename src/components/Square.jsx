import { useState } from 'react'
import { checkWinner } from '../utils/helpers'
import { CircleIcon, CrossIcon } from './Icons'

export const Square = ({ value, updateBoard, dataId }) => {
  const handleClick = () => {
    updateBoard(dataId)
  }

  return (
    <div
      className="w-40 h-40 flex items-center justify-center bg-blue-200 rounded-lg"
      style={{ boxShadow: '4px 8px 4px rgb(100, 100, 100)' }}
      data-id={dataId}
      onClick={handleClick}
    >
      {value === 'X' ? (
        <CrossIcon className={'w-16 h-auto text-slate-700'} />
      ) : value === 'O' ? (
        <CircleIcon className={'w-16 h-auto text-slate-700'} />
      ) : (
        ''
      )}
    </div>
  )
}
