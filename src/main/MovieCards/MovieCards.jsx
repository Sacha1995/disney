import Image from "./Image";
import Interaction from "./Interaction";
import Rating from "./Rating";
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
          <Rating rating={rating} />
          <Summary summary={summary} />
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
