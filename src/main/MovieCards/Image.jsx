import React from "react";

const Image = ({ imageUrl, imageAlt }) => {
  return <img src={imageUrl} alt={imageAlt} />;
};

export default Image;
