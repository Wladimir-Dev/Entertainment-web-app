import React, { useEffect, useId, useRef, useState } from 'react'
import { ListOfMovies } from '../ListOfMovies'

export const GenderMovies = ({ movies }) => {


    const RomanticMovies = movies.filter(movie =>
        movie.genres.some(
            (element) => element.toLowerCase() == 'romance'))

    const ActionMovies = movies.filter(movie =>
        movie.genres.some(
            (element) => element.toLowerCase() == 'acción'))

    const DramaMovies = movies.filter(movie =>
        movie.genres.some(
            (element) => element.toLowerCase() == 'drama'))

    console.log("render GenderMovies")
    return (
        <>
            <p>Drama</p>
            <ListOfMovies movies={DramaMovies} />

            <p>Romance</p>
            <ListOfMovies movies={RomanticMovies} />

            <p>Acción</p>
            <ListOfMovies movies={ActionMovies} />


        </>
    )
}
