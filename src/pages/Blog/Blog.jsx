import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Blog2img from "../../Utils/Images/test2.jpg";
import Blog1img from "../../Utils/Images/test1.jpg";
import Blog3img from "../../Utils/Images/test3.jpg";
import Blog4img from "../../Utils/Images/test4.jpg";
import Blog5img from "../../Utils/Images/test5.jpg";

const blogs = [
  {
    id: 1,
    img: [Blog1img],
    title: "Blog 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum pariatur dolore corrupti eligendi",
  },
  {
    id: 2,
    img: [Blog2img],
    title: "Blog 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum pariatur dolore corrupti eligendi",
  },
  {
    id: 3,
    img: [Blog3img],
    title: "Blog 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum pariatur dolore corrupti eligendi",
  },
  {
    id: 4,
    img: [Blog4img],
    title: "Blog 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum pariatur dolore corrupti eligendi",
  },
  {
    id: 5,
    img: [Blog5img],
    title: "Blog 5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum pariatur dolore corrupti eligendi",
  },
];

export default function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Blog</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            pariatur dolore corrupti eligendi. Fuga, facere tempora accusamus
            eos voluptates tenetur asperiores sit commodi delectus nesciunt
            omnis quos ratione accusantium voluptatibus?
          </p>
        </div>
      </header>
      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to={`/blog/${blog.id}`} className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect bg-dark text-light border-0">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5 d-flex flex-column align-items-center">
                      <Card.Title className="fs-2 mb-4">
                        {blog.title}
                      </Card.Title>
                      <Card.Text className="text-center ">
                        {blog.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
