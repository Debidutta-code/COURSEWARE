import React from "react";
import myimg1 from "./image/img-1.jpg";
import myimg2 from "./image/img-2.jpg";
import myimg3 from "./image/img-3.jpeg";

const Body = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-80"
              src={myimg1}
              alt="First slide"
              height={600}
              width={2000}
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-80" src={myimg2} alt="Second slide" 
               height={600}
              width={2000}
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-80" src={myimg3} alt="Third slide" 
               height={600}
              width={2000}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Body;
