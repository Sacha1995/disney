import Image from "./Image";
import Interaction from "./Interaction";
import Ratings from "./Ratings";
import Summary from "./Summary";
import Title from "./Title";
import Year from "./Year";

const MovieCards = (item) => {
  const {
    title,
    image,
    year,
    rating,
    summary,
    love,
    wantToWatch,
    watched,
    movieId,
    value,
  } = item.information;
  return (
    <div className="movieCard">
      <Interaction
        love={love}
        wantToWatch={wantToWatch}
        watched={watched}
        onToggle={item.onToggle}
        id={movieId}
      />
      <div className="containerInfo">
        <Image imageUrl={image} imageAlt={title} />
        <div className="containerInfoText">
          <Title title={title} />
          <Year year={year} />
          <Ratings
            rating={parseInt(rating, 10)}
            onToggle={item.onToggle}
            id={movieId}
            value={value}
          />
          <Summary summary={summary} />
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
