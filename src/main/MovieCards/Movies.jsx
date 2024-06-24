import MovieCards from "./MovieCards";

const Movies = ({ information, onToggle }) => {
  return (
    <>
      <div className="moviesContainer">
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
