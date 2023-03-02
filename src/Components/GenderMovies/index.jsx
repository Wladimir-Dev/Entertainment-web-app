import React, { useEffect, useId, useRef, useState } from 'react'
import { filterMovies } from '../../utilities/filterMovies'
import { ListOfMovies } from '../ListOfMovies'

export const GenderMovies = ({ movies,moviesSaved}) => {

    const DramaMovies = filterMovies({ movies, gender: "drama" })

    const RomanticMovies = filterMovies({ movies, gender: "romance" })

    const ActionMovies = filterMovies({ movies, gender: "acción" })


    return (
        <>
            <p>Drama</p>
            <ListOfMovies movies={DramaMovies} moviesSaved={moviesSaved} />

            <p>Romance</p>
            <ListOfMovies movies={RomanticMovies}  moviesSaved={moviesSaved}/>

            <p>Acción</p>
            <ListOfMovies movies={ActionMovies}  moviesSaved={moviesSaved}/>


        </>
    )
}
