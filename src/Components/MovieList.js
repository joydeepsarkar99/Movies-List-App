const MovieList = ({movies}) => {
    return <div className="movies">
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {movies && movies.map((movie,index)=>{
                    return <tr key={index}>
                        <td>{movie.title}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.year}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}
export default MovieList;