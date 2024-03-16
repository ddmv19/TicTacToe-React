import { CircleIcon, CrossIcon } from './Icons'

export const Square = ({ value, updateBoard, dataId }) => {
  const handleClick = () => {
    updateBoard(dataId)
  }

  return (
    <div
      className="w-40 h-40 flex items-center justify-center bg-blue-200 rounded-xl dark:bg-[#1F3540]"
      id="square"
      data-id={dataId}
      onClick={handleClick}
    >
      {value === 'X' ? (
        <CrossIcon
          className={
            'w-16 h-auto text-red-600 font-extrabold dark:text-[#31C4BE]'
          }
        />
      ) : value === 'O' ? (
        <CircleIcon
          className={
            'w-16 h-auto text-blue-600 font-extrabold dark:text-[#F2B13B]'
          }
        />
      ) : (
        <span></span>
      )}
    </div>
  )
}
