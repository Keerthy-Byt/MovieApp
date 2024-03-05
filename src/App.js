import './App.css';
import MovieCard from './MovieCard';
import searchIcon from './search.svg'
import {useEffect, useState} from "react";

// c429c8b

const API_URL = 'http://www.omdbapi.com/?apikey=c429c8b';


const App = () =>{
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");

    const searchMovies=async(title)=>{
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search);
        }

        useEffect(()=>{
            searchMovies('Spiderman')
        },[]);
    return(
        <div className="app">
            <h1>Movieland</h1>
            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img 
                    src={searchIcon}
                    alt="Search"
                    onClick={()=>searchMovies(searchTerm)}/>
            </div>
            {movies?.length>0 ? (
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
                ):
                (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>

                )
            }
        </div>
    );
}

export default App;