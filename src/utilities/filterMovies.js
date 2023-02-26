import React from 'react'

export function filterMovies({ movies, gender }) {

    return movies.filter(movie =>
        movie.genres.some(
            (element) => element.toLowerCase() == gender)).slice(0, 4)
}
