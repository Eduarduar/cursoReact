export const WinnerModal = ({ winner, resetGame }) => {
    if (winner === null) return null

    const winnerText = winner === false ? 'Draw' : `Winner: ${winner}`
    const className = winner === false ? 'text-red-500' : 'text-green-500'

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center' onClick={resetGame}>
            <div className='bg-slate-800 p-4 rounded-lg'>
                <h2 className={`text-center text-2xl font-bold ${className}`}>
                    {winnerText}
                </h2>
                <button onClick={resetGame} className='block mx-auto mt-4 bg-green-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-600 transition-all'>Restart</button>
            </div>
        </div>
    )
}