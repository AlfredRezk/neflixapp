const API_KEY = process.env.TMDB_KEY

export const getMovies = async(type)=>{
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
    const res = await fetch(url);
    if(!res.ok){
        throw new Error('Failed to fech data')
    }

    const {results } = await res.json()
    return results; 
}


export const getVideoKey = async(movieId)=>{
    const viedeoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
    const res = await fetch(viedeoUrl)
    if(!res.ok){
        throw new Error('Failed to fech data')
    }

    const data = await res.json()
    return data?.results[0]?.key 
}

export const getMovieDetails = async(movieId)=>{
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    const res = await fetch(url)
    if(!res.ok){
        throw new Error('Failed to fech data')
    }

    const data = await res.json()
    return data; 
}