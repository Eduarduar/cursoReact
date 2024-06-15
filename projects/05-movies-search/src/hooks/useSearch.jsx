import { useEffect, useRef, useState } from 'react'

export function useSearch () {
    const [ query, setQuery ] = useState('')
    const [ error, setError ] = useState('')
    const firstInput = useRef(true)
  
    useEffect(() => {
      if (firstInput.current) {
        firstInput.current = query === ''
        if (firstInput.current) return
      }

      if (query.startsWith(' ')) {
        setError('The query cannot start with a space')
        return
      }

      if (query.length > 70) {
        setError('The query cannot have more than 70 characters')
        return
      }
  
      setError('') // if the query is valid, we remove the error message
    }, [query])
    
  
    return { query, error, setQuery }
}