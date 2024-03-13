export const winnerPlays = [
  '012',
  '345',
  '678',
  '036',
  '147',
  '258',
  '048',
  '246',
]

export const checkWinner = (board = []) => {
  const elementsUndefined = board.filter((element) => !element).length
  if (elementsUndefined <= 4) {
    for (let i = 0; i < winnerPlays.length; i++) {
      const first = parseInt(winnerPlays[i].charAt(0))
      const second = parseInt(winnerPlays[i].charAt(1))
      const third = parseInt(winnerPlays[i].charAt(2))
      if (
        board[first] &&
        board[first] === board[second] &&
        board[second] === board[third]
      ) {
        return board[first]
      }
    }
  }

  return false
}
