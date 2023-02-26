import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useMovies } from '../../hooks/useMovies'
import { GenderMovies } from '../GenderMovies';
import { NoMovies } from '../NoMovies';
import { SearchedMovies } from '../SearchedMovies';
import debounce from "just-debounce-it";

export const Movies = () => {

    const { movies, getMovies, loading } = useMovies();

    const inputRef = useRef("")
    const prevSearch = useRef("")
    const inputId = useId();

    const hasMovies = movies?.movie_count;


    const debounceGetMovies = useCallback(
        debounce(search => {
            console.log("render desde debounce")
            prevSearch.current = search;
            getMovies(search)
        }, 400), [getMovies])


    const handleSubmit = (e) => {

        e.preventDefault();
        const textInput = e.target.busqueda.value;

        if (prevSearch.current == textInput) return

        prevSearch.current = textInput;
        getMovies(textInput)
    }

    const handleInput = (e) => {

        debounceGetMovies(inputRef.current.value);

    }


    console.log(inputRef.current.value)
    loading
        ? console.log("render movies-loading true")
        : console.log("render movies-loading false")


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor={inputId}>lupa</label>
                <input id={inputId} onChange={handleInput} name="busqueda" type={'text'} ref={inputRef} placeholder="averngers,matrix..." />
            </form>
            {
                loading
                    ? <p>cargando....</p>
                    :
                    hasMovies
                        ? (inputRef.current?.value == "")
                            ? <GenderMovies movies={movies.movies} />
                            : <SearchedMovies movies={movies.movies} search={inputRef.current.value} />
                        : <NoMovies />
            }
        </>
    )
}
