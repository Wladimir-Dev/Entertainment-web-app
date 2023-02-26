
export async function searchMovies({ search }) {

    try {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=20&query_term=${search}`)
        const json = await response.json()

        return json.data
    } catch (error) {
        throw new Error("problemas en el fetch")
    }
}
