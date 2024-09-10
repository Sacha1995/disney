import Search from "../Navigation/Search";
import MovieCards from "./MovieCards";

const Movies = ({
  information,
  onToggle,
  callback,
  searchStr,
  filteredList,
}) => {
  return (
    <>
      <p className="description">
        Welcome to the Disney Classics movielist. Here you can learn all about
        the movies, rate them and make your own personalised lists.
      </p>
      <Search callback={callback} />
      <div className="moviesContainer">
        {searchStr !== "" && !filteredList.length && (
          <p className="message">There are no matches.</p>
        )}
        {information.map((item) => {
          return (
            <MovieCards
              key={item.movieId}
              information={item}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    </>
  );
};

export default Movies;
