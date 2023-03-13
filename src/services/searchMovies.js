
export const searchMovies = async ( { query } ) => {

    if(query === '') return null
    console.log(query);

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=62237db&s=${query}`)
        const json = await response.json()
        
        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster 
        }))

    } catch (error) {
        throw new Error(error.mesagge)
    }
}
