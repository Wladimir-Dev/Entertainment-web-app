import React, { useCallback, useId, useRef } from 'react'
import { useMovies } from '../../hooks/useMovies'
import { GenderMovies } from '../GenderMovies';
import { NoMovies } from '../NoMovies';
import { SearchedMovies } from '../SearchedMovies';
import debounce from "just-debounce-it";
import { Loading } from '../Loading';
import { MdSearch } from "react-icons/md";


import styles from './styles.module.css'
import desktop from './desktop.module.css'
import { useSavedMovie } from '../../hooks/useSavedMovie';

export const Movies = ({moviesSaved}) => {

    const { movies, getMovies, loading } = useMovies();



    const inputRef = useRef("")
    const prevSearch = useRef("")
    const inputId = useId();

    const hasMovies = movies?.movie_count;


    const debounceGetMovies = useCallback(
        debounce(search => {
            prevSearch.current = search;
            getMovies(search)
        }, 700), [getMovies])


    const handleSubmit = (e) => {

        e.preventDefault();
        const textInput = e.target.busqueda.value;

        if (prevSearch.current == textInput) return

        prevSearch.current = textInput;
        getMovies(textInput)
    }

    const handleChange = (e) => {
        debounceGetMovies(inputRef.current.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={`${styles.form} ${desktop.form}`}>
                <label htmlFor={inputId}><MdSearch /></label>
                <input
                    id={inputId}
                    onChange={handleChange}
                    name="busqueda"
                    type={'text'}
                    ref={inputRef}
                    placeholder="Avengers,Matrix..."
                />
            </form>
           
            <section className={styles.moviesContainer}>
                {
                    loading
                        ? <Loading />
                        :
                        hasMovies
                            ? (inputRef.current?.value == "")
                                ? <GenderMovies movies={movies.movies} moviesSaved={moviesSaved}/>
                                : <SearchedMovies movies={movies.movies} search={inputRef.current.value} moviesSaved={moviesSaved}/>
                            : <NoMovies />
                }
            </section>
        </>
    )
}
