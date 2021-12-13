import React from "react";
import "../ImageCard/index.css";
import data from "../../data";

const ImageCard = () => {
  return (
    <div className="card">
      {data.map((img) => (
        <img src={img.src} alt="name" className="image-thumb" />
      ))}
    </div>
  );
};

export default ImageCard;
