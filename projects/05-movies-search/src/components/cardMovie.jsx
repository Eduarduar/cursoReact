import PropTypes from 'prop-types'

const placeholderImage = 'https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg'

export function CardMovie({ movies }) {
  CardMovie.propTypes = {
    movies: PropTypes.array.isRequired,
  };
  return (
    <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 p-6'>
      {movies.map((movie) => (
        <div key={movie.id} className='flex flex-col gap-4 bg-slate-800 p-4 justify-center rounded-lg h-full w-fit mx-auto items-center'>
          <img src={movie.poster != 'N/A' ? movie.poster : placeholderImage} alt={movie.title} className='w-[200px] h-[290px] object-cover' />
          <div className='flex flex-col gap-2 w-full justify-start items-start'>
            <h2 className='font-bold text-xl'>{movie.title}</h2>
            <p>Year: {movie.year}</p>
            <p>Type: {movie.type}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function NoMoviesResults() {
    return (
        <div className='flex flex-row justify-center'>
          <h1 className='text-4xl font-bold'>No movies found</h1>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
export function Movies ({ movies }) {
  // eslint-disable-next-line react/prop-types
  const hasMovies = movies?.length > 0
  return(
      hasMovies 
      ? <CardMovie movies={movies} />
      : <NoMoviesResults />
  )
}