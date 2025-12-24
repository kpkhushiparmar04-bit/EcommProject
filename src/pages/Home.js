import React from "react";

export default function Home() {
  return (
    <div>
      {/* SLIDER */}
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="kids.png" className="d-block w-100" alt="kids" />
          </div>
          <div className="carousel-item">
            <img src="boyss.png" className="d-block w-100" alt="boys" />
          </div>
          <div className="carousel-item">
            <img src="woman.png" className="d-block w-100" alt="woman" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      
            
          </div>
    
  );
}
