import { useState } from 'react'

export function CardFollow({ name, username, inicialIsFollowing = false}) {
    // State variables to track whether the user is following and if the button is being hovered
    const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)
    const [isHovered, setIsHovered] = useState(false)

    // Determine the text to display on the button based on the following state and hover state
    const text = isFollowing ? (isHovered ? 'Dejar de seguir' : 'Siguiendo') : 'Seguir'
    
    // Determine the class name for the button based on the following state to apply different styles
    const buttonClassName = isFollowing ? 'bg-transparent border-white text-white hover:text-red-500 hover:border-red-500 min-w-[127px]' : 'border-transparent bg-white text-black hover:bg-gray-300'

    return (
        <article className='flex items-center text-white text-[.8rem] bg-slate-800 rounded-2xl p-2 justify-between w-[320px]'>
            <header className='flex items-center gap-2'>
                <img src={`https://unavatar.io/${username}`} alt="Mi avatar" className='w-12 h-12 rounded-full' />
                <div className='flex flex-col'>
                    <span className=' overflow-hidden w-[150px] text-nowrap'>{name}</span>
                    <span className='opacity-60'>@{username}</span>
                </div>
            </header>
            <aside className='flex flex-row justify-end w-fit overflow-visible bg-slate-800'>
                <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`ml-3 rounded-full py-[6px] px-4 font-bold border-[1px] max-h-[32px] text-nowrap ${buttonClassName} transition-all duration-200`}>
                    {text}
                </button>
            </aside>
        </article>
    )
}