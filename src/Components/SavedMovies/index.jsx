import React from 'react'
import { ListOfMovies } from '../ListOfMovies'

export const SavedMovies = ({moviesSaved}) => {

  console.log(moviesSaved)

  return (
    <>
            <div>SavedMovies</div>
            <ListOfMovies movies={moviesSaved.savedMovies} moviesSaved={moviesSaved} />
    
    </>
  )
}
