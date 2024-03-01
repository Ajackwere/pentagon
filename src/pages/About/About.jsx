import React from "react";
import "./ABout.css";
import { Link } from "react-router-dom";
import AboutUsSectionImg from "../../Utils/Images/msomiCover.jpg";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import Person1 from "../../Utils/Images/person1.jpg";
import Person2 from "../../Utils/Images/person2.jpg";
import Person3 from "../../Utils/Images/person3.jpg";
import Person4 from "../../Utils/Images/person4.jpg";
import Person5 from "../../Utils/Images/person5.jpg";
import Person6 from "../../Utils/Images/person6.jpg";
import Person7 from "../../Utils/Images/person7.JPG";
import Person8 from "../../Utils/Images/person8.jpg";

const persons = [
  { id: 1, img: Person1 },
  { id: 2, img: Person2 },
  { id: 3, img: Person3 },
  { id: 4, img: Person4 },
  { id: 5, img: Person5 },
  { id: 6, img: Person6 },
  { id: 7, img: Person7 },
  { id: 8, img: Person8 },
];

export default function About() {
  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center text-light">
          <h1 className="text-center fw-semibold my-5">About Us</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            harum aliquid? At id fuga repellendus ullam in nostrum deserunt et
            nam, ducimus nisi autem ab cupiditate, alias pariatur beatae
            repellat soluta assumenda totam blanditiis aspernatur quibusdam
            quam, vitae ut? Placeat magnam error ducimus earum porro laboriosam
            recusandae soluta, dolores doloremque!
          </p>
        </div>
      </header>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
            <h2 className="mb-4 mb-lg-5">Study with us</h2>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              commodi officiis vitae id culpa repellat, officia tenetur fugiat
              placeat architecto dolor dicta corrupti alias soluta aliquam earum
              ab blanditiis quod?
            </p>
            <p className="mb-4 mb-lg-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              sapiente ab beatae eos mollitia est, inventore, at impedit earum
              aliquid doloribus! Aspernatur molestias vitae, doloribus fugit
              distinctio eveniet unde perferendis?
            </p>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Reach out to us
              </button>
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={AboutUsSectionImg} alt="" className="img-fluid w-75" />
          </div>
        </div>
        <div className="bg-dark text-light py-5">
          <ChooseSection />
        </div>
        <div className="bg-body-tertiary py-5">
          <div className="container">
            <h2 className="text-center mb-5"> Our Winners </h2>
            <div className="row g-4">
              {persons.map((person) => (
                <div key={person.id} className="col-md-4">
                  <img src={person.img} className="img-fluid" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
