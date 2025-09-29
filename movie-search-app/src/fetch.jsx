import React, { useEffect, useState } from "react";
import axios from "axios"
import MovieSearch from "./MovieSearch";


function MovieCard() {


    const [movies, setMovies] = useState([])

    const REACT_APP_API_KEY = "348ce71605a67ed83960815f022c9856"

    useEffect(() => {
        const DefaultMovies = async () => {
            try{
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular`,
                    {
                        params: {api_key: REACT_APP_API_KEY},
                    }
                )
                setMovies(data.results)
            }
            catch(err) {
                console.err("Failed to fetch default movie", err)
            }
        }
        DefaultMovies()
    }, [])

    const fetchMovie = async (name) => {
        try{
            const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {api_key: REACT_APP_API_KEY, query:name}
            })
            console.log(data.results)
            setMovies(data.results)
        }
        catch(err){
            alert("Failed to fetch movies")
            console.error(err)
        }
    }

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            <MovieSearch onSearch={fetchMovie}/>
            {movies.length === 0 ? (
                <p className="text-gray-600 text-center mt-6">No movies found</p>
            ) : (
               
                <div className="mt-8">
                <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movies.map((movie) => (
                    <li key={movie.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
                        {movie.poster_path && (
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} className="w-full h-72 object-cover"/>
                        )}
                        <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-lg font-semibold">{movie.original_title}</h2>
                        <h3 className="text-sm text-gray-500">{movie.release_date}</h3>
                        <p className="mt-2 text-gray-700 flex-grow">{movie.overview}</p>
                        </div>

                        
                    </li>
                ))}
                </ul>
                </div>
            )}
            
            
        </div>
    )

}

export default MovieCard