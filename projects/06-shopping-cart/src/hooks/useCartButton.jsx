import { useState } from 'react'
export function useCartButton () {
    const [ isOpen, setIsOpen ] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return { isOpen, handleClick }
}