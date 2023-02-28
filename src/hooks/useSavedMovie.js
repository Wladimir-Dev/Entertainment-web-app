import React, { useState } from 'react'

export function useSavedMovie() {


    const [savedMovies, setSavedMovies] = useState(JSON.parse(window.localStorage.getItem("savedMovies")) || []);

    const saveMovie = (movie) => {
        const newSavedMovies = [...savedMovies, movie];
        setSavedMovies(newSavedMovies);
        window.localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));

    }

    const uncheckMovie = (idMovie) => {

        const newSavedMovies = savedMovies.filter(movie => movie.id != idMovie)
        setSavedMovies(newSavedMovies);
        window.localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));

    }
    return ({ savedMovies, saveMovie,uncheckMovie })
}
