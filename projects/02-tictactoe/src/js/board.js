import { winCases } from '../utils/constants.js'

export const checkWinner = (currentBoard) => { // Function to check if there is a winner
    for (const winCase of winCases) {
        const [a, b, c] = winCase
        if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a]
        }
    }
    return null
}