import React, { useEffect, useId, useRef, useState } from 'react'
import { RxBookmark } from 'react-icons/rx';
import { BsStarHalf } from "react-icons/bs";
import { CgMagnet } from "react-icons/cg";
import styles from './styles.module.css'
import desktop from './desktop.module.css'
import { useSavedMovie } from '../../hooks/useSavedMovie';


export const ListOfMovies = ({ movies }) => {

    const { savedMovies, saveMovie, uncheckMovie } = useSavedMovie();

    const handleClick = (movie) => {

        if (isSaved(movie.id)) {
            uncheckMovie(movie.id)
        }
        else {
            saveMovie(movie)
        }

    }
    const isSaved = (movieId) => {
        return savedMovies.some(movie => movie.id == movieId);
    }

    console.log("render listof")

    return (
         <div className={`${styles.listOfMovies} ${desktop.listOfMovies}`}>
                
                    {movies.map(movie => {
                        return (
                            <div key={movie.id} className={`${styles.movieContainer} ${desktop.movieContainer}`}>
                                <figure className={`${styles.imageContainer} ${desktop.imageContainer}`}>
                                    <img
                                        loading='lazy'
                                        src={movie.medium_cover_image}
                                        alt={`poster of movie ${movie.title}`} />
                                    <button
                                        onClick={() => handleClick(movie)}
                                        className={`${styles.iconSave} ${isSaved(movie.id) && styles.iconSave__active}`}>
                                        <RxBookmark />
                                    </button>
                                    <a
                                    href={movie.torrents[0].url}
                                        className={`${styles.playContainer} ${desktop.playContainer}`}
                                        type="button">
                                        <CgMagnet /> Torrent
                                    </a>
                                </figure>

                                <div className={styles.movieDetails}>
                                    <p>{movie.year}</p>
                                    <p>
                                        <BsStarHalf />
                                        <BsStarHalf />
                                        <BsStarHalf />
                                        {movie.rating} / 10
                                    </p>
                                </div>
                                <p className={styles.title}>{movie.title}</p>
                            </div>
                        )
                    })
                    }
                
            </div>
    )
}