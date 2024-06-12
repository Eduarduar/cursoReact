import { useEffect, useState } from 'react'

export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (e) => {
            const { clientX, clientY } = e
            setPosition({ x: clientX, y: clientY })
        }
        if (enabled) {
            window.addEventListener('mousemove', handleMove)
        }
        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    }, [enabled])

    return (
        <>
            <div className=" absolute bg-[#09f] rounded-full opacity-40 pointer-events-none w-10 h-10 -top-5 -left-5" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} ></div>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar Puntero' : 'Activar Puntero'}
            </button>
        </>
    )
}