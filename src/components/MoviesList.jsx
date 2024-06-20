
import React, { useState } from 'react';

function MoviesList() {

    const [movies, setMovies] = useState([
        { title: 'Interstellar', description: 'a science fiction film about a group of astronauts who journey through a wormhole to find a new home for humanity as Earth faces catastrophic environmental decline.' },
        { title: 'Step Brothers', description: 'a comedy about two middle-aged, immature men who are forced to live together as brothers when their single parents marry each other.' },
        { title: 'The Conjuring', description: 'a horror film that follows paranormal investigators Ed and Lorraine Warren as they help a family terrorized by a dark presence in their farmhouse.' },
        { title: 'Fury', description: 'a war film that follows a battle-hardened tank crew led by Sergeant Don "Wardaddy" Collier as they undertake a deadly mission behind enemy lines in Nazi Germany during the final days of World War II.' },
        { title: 'The Wolf Of Wall Street', description: 'a comedy that chronicles the rise and fall of stockbroker Jordan Belfort, depicting his hedonistic lifestyle and fraudulent exploits on Wall Street.' }
    ]);


    const [showDetails, setShowDetails] = useState({});
    
    function toggleDetails(index) {
        setShowDetails(viewDetails => ({
            ...viewDetails,
            [index]: !viewDetails[index]
        }));
    };

    function removeMovie(index) {
        setMovies(viewMovies => viewMovies.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Favorite Movies</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <h2>{movie.title}</h2>
                        <button onClick={() => toggleDetails(index)}>
                            {showDetails[index] ? 'Hide Details' : 'Show Details'}
                        </button>
                        <button onClick={() => removeMovie(index)}>Remove</button>
                        {showDetails[index] && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
