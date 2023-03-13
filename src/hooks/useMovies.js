import { useRef } from 'react'
import { useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export const useMovies = ({query}) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorSearch, setErrorSearch] = useState(null)
    const previousSearch = useRef(query);
    
    const getMovies = async () => {

        if (previousSearch.current === query) return 
        try {
            setLoading(true)
            setErrorSearch(null)
            previousSearch.current = query
            const newMovies = await searchMovies({query})
            setMovies(newMovies)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setErrorSearch("No existen películas para esta búsqueda")
        }finally{
            setLoading(false)
        }

    }

    return { movies, getMovies, loading, errorSearch}
}