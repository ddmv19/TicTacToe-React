import { CircleIcon, CrossIcon } from './Icons'

export const Modal = ({ winner, resetBoard }) => {
  if (winner === null) return null

  const text = winner === false ? 'Empate' : 'Ganador'
  const visibility = winner === false || winner ? 'block' : 'hidden'

  const handleClick = () => {
    resetBoard()
  }

  return (
    <div className={`w-[100vw] h-[100vh] absolute top-0 left-0 ${visibility}`}>
      <div className="absolute top-[50%] left-[45%] px-4 py-6 rounded-md flex flex-col gap-5 items-center justify-center bg-blue-500 opacity-85">
        <span className="text-2xl text-gray-800 font-extrabold tracking-widest uppercase">
          {text}
        </span>
        {winner === 'X' ? (
          <CrossIcon className={'w-8 h-auto text-gray-200'} />
        ) : winner === 'O' ? (
          <CircleIcon className={'w-8 h-auto text-gray-200'} />
        ) : (
          <span className="font-bold">No hay ganador</span>
        )}
        <section>
          <button
            className="px-4 py-2 bg-black rounded-md text-white hover:bg-slate-900 transition-all"
            onClick={handleClick}
          >
            Volver a Jugar
          </button>
        </section>
      </div>
    </div>
  )
}
