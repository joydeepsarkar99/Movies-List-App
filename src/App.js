import GenreFilter from "./Components/GenreFilter";
import MovieList from "./Components/MovieList";
import { genres } from "./Data/GenresData";
import { movies } from "./Data/MoviesData";
import "./style.css";

const App = () => {

  return <div className="container">
    <h2>Top 15 Movies of All Time</h2>
    <GenreFilter genres={genres}/>
    <MovieList movies={movies}/>
  </div>

}
export default App;
