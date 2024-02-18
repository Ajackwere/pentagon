import React from "react";
import "./courses.css";
import { Card } from "react-bootstrap";
import EcdeCourseImg from "../../Utils/Images/test2.jpg";
import PteCourseImg from "../../Utils/Images/test3.jpg";
import UdpteCourseImg from "../../Utils/Images/test4.jpg";
import JseCourseImg from "../../Utils/Images/test5.jpg";
import JpeCourseImg from "../../Utils/Images/test6.jpg";
import SportsCourseImg from "../../Utils/Images/SportsCourse.jpg";
import Faq from "../../components/ChooseSection/Faq/Faq";

export default function Courses() {
  const courses = [
    {
      id: 1,
      img: [EcdeCourseImg],
      title: "Early Childhood Development Course",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut id facere quos omnis aspernatur labore et architecto vitae!",
    },
    {
      id: 2,
      img: [PteCourseImg],
      title: "Diploma in Primary Teacher Education Course",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut id facere quos omnis aspernatur labore et architecto vitae!",
    },
    {
      id: 3,
      img: [UdpteCourseImg],
      title: "Upgrade Diploma in Primary Teacher Education Course",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut id facere quos omnis aspernatur labore et architecto vitae!",
    },
    {
      id: 4,
      img: [JseCourseImg],
      title: "Junior Secondary Education Course",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut id facere quos omnis aspernatur labore et architecto vitae!",
    },
    {
      id: 5,
      img: [SportsCourseImg],
      title: "Sports Course",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut id facere quos omnis aspernatur labore et architecto vitae!",
    },
    {
      id: 6,
      img: [JpeCourseImg],
      title: "Junior Primary Education Course",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut id facere quos omnis aspernatur labore et architecto vitae!",
    },
  ];
  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold"> Our Courses </h1>
          <p className="text-center w-75 mb-5 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut id
            facere quos omnis aspernatur labore et architecto vitae aliquid quas
            corrupti, quia, itaque optio iste neque commodi quasi enim?
          </p>
        </div>
      </header>
      <div className="container py-5">
        {courses.map((course) => (
          <div key={course.id} className="col-lg-6">
            <Card className="text-white shadow scale-hover-effect">
              <Card.Img src={course.img}/>
              <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5">
                <Card.Title className="fs-1 text-danger" > {course.title}</Card.Title>
                <Card.Text> {course.description}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
      </div>
      <div className="bg-dark text-light py-5">
        <Faq/>
      </div>
    </div>
  );
}
