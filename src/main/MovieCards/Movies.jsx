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
