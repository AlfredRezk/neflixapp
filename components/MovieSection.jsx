import { getMovies } from '@/app/(private)/TMD'
import React from 'react'
import MovieList from './MovieList'

const MovieSection = async({title, type}) => {

    const movies = await  getMovies(type)


  return (
    <div className='my-20'>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'> {title}</p>
        <MovieList movies={movies}/>
    </div>
  )
}

export default MovieSection