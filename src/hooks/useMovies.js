import { useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export const useMovies = ({query}) => {
    const [movies, setMovies] = useState([])
    
    const getMovies = async () => {
        const newMovies = await searchMovies({query})
        setMovies(newMovies)
        console.log(movies);
    }


    return { movies, getMovies}
}