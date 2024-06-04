const GenreFilter = ({ genres }) => {
    const handleGenre = (e) => {
        console.log("Filtering by",e.target.innerText);
    };

    return <div className="genres">
        <h3>Filter by Genre</h3>
        <div className="genre-tags">
            {genres && genres.map((genre, index) => {
                return <button key={index} onClick={handleGenre}>{genre}</button>
            })}
        </div>
    </div>
}
export default GenreFilter;