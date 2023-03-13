import React, { useEffect, useRef, useState } from 'react'
import useSearch from '../hooks/useSearch';
import { Movies } from './Movies'
import { useMovies } from '../hooks/useMovies'

const SearchMovies = () => {
    const { error, query , setQuery}  = useSearch();
    const { movies, getMovies } = useMovies({query})

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies()
    }
    const handleChange = (e) =>{
        setQuery(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label >
                <input placeholder='Star Wars, Avengers, The Matrix...' name='query' value={query}  type="text" onChange={handleChange} />
            </label>
            <button type='submit'>Search</button>
        </form>
        {error ? <p style={{color:"red",textAlign:"center"}}>{error}</p> : error}
        <Movies movies={movies}/>
    </div>
  )
}

export default SearchMovies