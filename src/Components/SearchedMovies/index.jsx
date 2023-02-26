import React, { useEffect, useId, useRef, useState } from 'react'
import { ListOfMovies } from '../ListOfMovies'


export const SearchedMovies = ({ movies, search }) => {
    console.log("render SearchedMovies")
    return (
        <>
            <p>resultados de {search}</p><br></br>
            <ListOfMovies movies={movies} />
        </>
    )
}