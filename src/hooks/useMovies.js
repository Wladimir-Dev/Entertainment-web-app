import { useEffect, useState } from 'react'
import withResults from '../mocks/withResults.json'
import { searchMovies } from '../services/searchMovies';



export function useMovies() {

    const jsonMovies = withResults.data;

    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getMovies("")
    }, [])



    const getMovies = async (search) => {

        console.log("render useGetMovies")
        try {
            setLoading(true)
            const newMovies = await searchMovies({ search });

            setMovies(newMovies)
        } catch (error) {
            throw new Error("algo pasa en getMovies")
        }
        finally {
            setLoading(false);
        }
    }

    return { movies, setMovies, getMovies, loading }
}
