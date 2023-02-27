import React, { useEffect, useId, useRef, useState } from 'react'
import { RxBookmark } from 'react-icons/rx';
import { BsStarHalf } from "react-icons/bs";
import { MdPlayCircle } from "react-icons/md";
import styles from './styles.module.css'


export const ListOfMovies = ({ movies }) => {


    return (
        <div className={styles.listOfMovies}>
            <>
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className={styles.movieContainer}>
                            <figure className={styles.imageContainer}>
                                <img
                                    loading='lazy'
                                    src={movie.medium_cover_image}
                                    alt={`poster of movie ${movie.title}`} />
                                <button className={styles.iconSave}>
                                    <RxBookmark />  
                                </button>
                                <button className={styles.playContainer}>
                                    <MdPlayCircle /> Play
                                </button>
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
            </>
        </div>
    )
}