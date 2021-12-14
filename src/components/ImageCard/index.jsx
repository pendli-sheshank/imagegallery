import React from "react";
import "../ImageCard/index.css";
import data from "../../data";
import { SRLWrapper } from "simple-react-lightbox";

const ImageCard = () => {
  return (
    <SRLWrapper>
      <div className="container">
        {data.map(img => (
          <div className="card">
            <img src={img.src} alt="name" className="image-thumb" />
          </div>
        ))}
      </div>
    </SRLWrapper>
  );
};

export default ImageCard;
