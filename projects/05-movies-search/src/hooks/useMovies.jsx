import { useState, useRef, useCallback} from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies ({ error }) {
  const [ movies, setMovies] = useState([])
  const queryRef = useRef('')

  const getMovies = useCallback( async ({ query }) => {
    if (error || query == queryRef.current) return
    queryRef.current = query
    const newMovies = await searchMovies({ query })
    setMovies(newMovies)
  }, [])

  return { movies, getMovies}
}