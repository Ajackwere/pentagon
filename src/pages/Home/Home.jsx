import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartCourseImg from "../../Utils/Images/startcourse.jpg";
import Faq from "../../components/ChooseSection/Faq/Faq";
import { Card } from "react-bootstrap";
import Blog1Img from "../../Utils/Images/msomiCover.jpg";
import Blog2Img from "../../Utils/Images/grad.jpg";
import Blog3Img from "../../Utils/Images/lechall.jpg";

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "Blog 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptas",
  },
  {
    id: 2,
    img: [Blog2Img],
    title: "Blog 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptas",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Blog 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptas",
  },
];

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                id!
              </p>
              <Link to="/courses">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
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
      <div className="py-5">
        <Faq />
      </div>
      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Latest on our blog
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              {" "}
              Read more blogs...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
