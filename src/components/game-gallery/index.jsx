import React from "react";

export default function GameGallery({ images = [] }) {
  const gallery = images.map((image, index) => (
    <img key={index} src={image} alt="preview" />
  ));

  return <div className="game-gallery">{gallery}</div>;
}
