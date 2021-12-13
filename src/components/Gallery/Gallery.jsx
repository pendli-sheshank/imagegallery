import React, { Component } from "react";
import ImageCard from "../ImageCard";
import "./Gallery.css";

export class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <ImageCard />
        </div>
      </div>
    );
  }
}

export default Gallery;
