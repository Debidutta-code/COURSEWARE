import React from "react";
import programstr from "./image/c1.webp";
import c2 from "./image/c2.jpg";
import c3 from "./image/c3.jpg";
const Cards = () => {
  return (
    <>
      <div className="cards">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src={programstr}
                alt="Avatar"
                height={300}
                width={300}
              />
              <h3 class="first-txt">
            Domain Courses
        </h3>
            </div>
            <div class="flip-card-back">
            <img
                src={programstr}
                alt="Avatar"
                height={300}
                width={300}
              />
              <h3 class="first-txt" >
            Domain Courses
        </h3>
        <p class="first-para"> Read all about our domain courses</p>
        <button type="button" class="card-btn btn btn-dark btn-lg">Explore</button>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={c2} alt="Avatar" height={300} width={300} />
              <h3 class="first-txt">
            Core Courses
        </h3>
            </div>
            <div class="flip-card-back">
            <img
                src={programstr}
                alt="Avatar"
                height={300}
                width={300}
              />
              <h3 class="first-txt" >
            Core Courses
        </h3>
        <p class="first-para"> Read all about our core courses</p>
        <button type="button" class="card-btn btn btn-dark btn-lg">Explore</button>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={c3} alt="Avatar" height={300} width={300} />
              <h3 class="first-txt">
            Skill Courses
        </h3>
            </div>
            <div class="flip-card-back">
            <img
                src={programstr}
                alt="Avatar"
                height={300}
                width={300}
              />
              <h3 class="first-txt" >
            Skill Courses
        </h3>
        <p class="first-para"> Read all about our skill courses</p>
        <button type="button" class="card-btn btn btn-dark btn-lg">Explore</button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="cards">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={c2} alt="Avatar" height={300} width={300} />
              <h3 class="first-txt">
            Asses. Criterion
        </h3>
            </div>
            <div class="flip-card-back">
            <img
                src={programstr}
                alt="Avatar"
                height={300}
                width={300}
              />
              <h3 class="first-txt" >
            Assessment Criterion
        </h3>
        <p class="first-para"> Read all about Assesment Criterion</p>
        <button type="button" class="card-btn btn btn-dark btn-lg">Explore</button>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={programstr} alt="Avatar" height={300} width={300} />
              <h3 class="first-txt">
            Other Infromation
        </h3>
            </div>
            <div class="flip-card-back">
            <img
                src={programstr}
                alt="Avatar"
                height={300}
                width={300}
              />
              <h3 class="first-txt" >
            Other Information
        </h3>
        <p class="first-para">Read all about time tables and schedules</p>
        <button type="button" class="card-btn btn btn-dark btn-lg">Explore</button>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={programstr} alt="Avatar" height={300} width={300} />
              <h3 class="first-txt">
           Certificate Courses
        </h3>
            </div>
            <div class="flip-card-back">
            <img
                src={programstr}
                alt="Avatar"
                height={300}
                width={300}
              />
              <h3 class="first-txt" >
            Certificate Courses
        </h3>
        <p class="first-para"> Read all about our certificate courses</p>
        <button type="button" class="card-btn btn btn-dark btn-lg">Explore</button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Cards;
