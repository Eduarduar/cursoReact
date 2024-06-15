const API_KEY = 'cbb3351e'
export const searchMovies = async ({ query }) => {
    if (query === '') return []
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie&r=json`)
        const json = await response.json()
        const movies = json.Search

        return movies?.map(movie => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                type: movie.Type,
                poster: movie.Poster
        }))
    } catch (error) {
        throw new Error('Error fetching movies')
    }
}