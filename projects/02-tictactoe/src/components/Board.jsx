import { Square } from './Square.jsx'

export const Board = ({ board, updateBoard }) => {
    return (
        <section className=' w-32 grid grid-cols-3 gap-3 mx-auto'>
            {board.map((_, index) => {
                return (
                    <Square key={index} index={index} updateBoard={updateBoard}>
                        {board[index]}
                    </Square>
                )
            })}
        </section>
    )
}