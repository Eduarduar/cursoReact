import debounce from 'just-debounce-it'
import { Movies } from './components/cardMovie.jsx'
import { useMovies } from './hooks/useMovies.jsx'
import { useSearch } from './hooks/useSearch.jsx'
import { useCallback } from 'react'

function App() {
  const { query, error, setQuery } = useSearch()
  const { movies, getMovies } = useMovies({ error: ( error!='' ? true : false ) })

  const debounceGetMovies = useCallback(
    debounce(search => {
        getMovies({ query: search})
      }, 500)
      , [getMovies]
    )

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ query })
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
    debounceGetMovies(newQuery)
  }

  return (
    <div className='container flex flex-col mx-auto min-h-screen text-white'>
      <form action='#' className='flex flex-col gap-4 rounded-lg p-6 w-full lg:w-1/2 mx-auto' onSubmit={handleSubmit}>
        <div className='w-full'>
          <h1 className='font-bold text-center text-4xl'>Movie Finder</h1>
        </div>
        <div className='flex flex-col gap-2 justify-center'>
          <label htmlFor='inputFind' className='text-lg'>Movie name:</label>
          <div className="flex flex-row w-full">
            <input name='query' type='text' onChange={handleChange} value={query} id='inputFind' className='p-2 border border-cyan-700 rounded-lg rounded-r-none bg-slate-800 text-white w-full' placeholder='Enter the movie name' />
            <button className="bg-cyan-700 hover:bg-cyan-800 text-white p-2 px-4 rounded-lg rounded-l-none">Search</button>
          </div>
          <div className='h-[20px]'>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
          </div>
        </div>
      </form>

      <main className='flex justify-center w-full'>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
