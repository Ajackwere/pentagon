import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartCourseImg from "../../Utils/Images/startcourse.jpg";

export default function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To </h2>
          <h1 className="text-center fw-semibold">Msomi Teachers College</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            reprehenderit perferendis, placeat nam tempora ipsa itaque a
            mollitia ab, ipsum, nulla blanditiis neque. Earum, aliquid odit!
            Soluta magnam quo consequuntur?
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Our courses
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="py-5">
        <ChooseSection />
      </div>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize"> 2024 start courses </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, id!
              </p>
              <Link to="/courses">
                <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                  Learn More!
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={StartCourseImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
