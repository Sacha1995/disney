import React from "react";

const Image = ({ imageUrl, imageAlt }) => {
  if (imageAlt === "Fantasia") {
    return (
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/p_fantasia_19641_cdb93769.jpeg"
        alt={imageAlt}
      />
    );
  }

  if (imageAlt === "The Reluctant Dragon") {
    return (
      <img
        src="https://m.media-amazon.com/images/M/MV5BZTBhMzE2MWQtMjllYy00YmNhLTgxMzctYWYzNTRiODU5MzhhXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UX1000_.jpg"
        alt={imageAlt}
      />
    );
  }

  if (imageAlt === "Saludos Amigos") {
    return (
      <img
        src="https://m.media-amazon.com/images/M/MV5BYmYyNjdlZTItMzNkMy00ZTg1LWFhMmItYTkzMmJkMjIyZDM3XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg"
        alt={imageAlt}
      />
    );
  }

  if (imageAlt === "Chicken Little") {
    return (
      <img
        src="https://m.media-amazon.com/images/M/MV5BMTM3MTIzMDQxMV5BMl5BanBnXkFtZTYwNTE0Mjg3._V1_FMjpg_UX1000_.jpg"
        alt={imageAlt}
      />
    );
  }

  return <img src={imageUrl} alt={imageAlt} />;
};

export default Image;
