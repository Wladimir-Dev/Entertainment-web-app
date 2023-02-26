

import React, { useEffect, useId, useRef, useState } from 'react'
import styles from './styles.module.css'


export const ListOfMovies = ({ movies }) => {

    return (
        <div className={styles.listOfMovies}>
            <>
                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} alt="poster of movie" />
                            <p>{movie.year}</p>
                            <p>{movie.title}</p>
                        </div>
                    )
                })
                }
            </>
        </div>
    )
}