export const Square = ({children, isSelected, updateBoard, index}) => {
    const className = isSelected ? 'bg-slate-700' : (isSelected == undefined ? 'border-[1px] border-white' : 'border-none')

    if (updateBoard == undefined) {
        // Non-selectable square
        return (
        <div className={`${className} text-white font-bold text-2xl flex items-center justify-center rounded-lg w-10 h-10 select-none`}>
            {children}
        </div>
        )
    } else {
        // Selectable square
        const handleClick = () => {
        updateBoard(index)
        }

        return (
            <div onClick={handleClick} className={`${className} text-white font-bold text-2xl flex items-center justify-center rounded-lg cursor-pointer w-10 h-10 select-none cursor-pointer`}>
                {children}
            </div>
        )
    }
  
}