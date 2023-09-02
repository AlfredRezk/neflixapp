"use client"
import MovieCard from './MovieCard'
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const MovieList = ({movies}) => {
    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  

  return (
    <div className='grid grid-flow-col gap-4 space-x-3 overflow-x-scroll no-scrollbar' ref={ref}     {...events}>
        {movies.map(movie=>(<MovieCard key={movie.id} {...movie}/>))}
    </div>
  )
}

export default MovieList