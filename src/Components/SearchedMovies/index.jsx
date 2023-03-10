import React, { useEffect, useId, useRef, useState } from 'react'
import { ListOfMovies } from '../ListOfMovies'


export const SearchedMovies = ({ movies, search, moviesSaved }) => {

    return (
        <>
            <p>Resultados de <b>{search}</b></p><br></br>
            <ListOfMovies movies={movies} moviesSaved={moviesSaved}/>
        </>
    )
}