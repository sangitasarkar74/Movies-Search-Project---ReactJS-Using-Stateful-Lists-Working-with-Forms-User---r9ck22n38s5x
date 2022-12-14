import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);

    function handleClick(e) {
        const movieList = movies.filter(movie => movie.title.includes(inputValue)).map(movie => movie.title);
        setResult(movieList)
    }

    function handleChange(e) {
        setInputValue(e.target.value);
        e.preventDefault();
    }

    return (
        <div id="main">
            <form id="form" onSubmit={handleChange}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                ></input>
                <button id="button" type="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&
                    results.map((movie) => (
                        <div className="movie" key={movie.id}>{movie.title}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;
