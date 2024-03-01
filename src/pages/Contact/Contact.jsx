import React from "react";
import "./contact.css";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Mig from "../../Utils/Images/Mig.jpg";
import Nai from "../../Utils/Images/Nairobi.jpg";
import Kisii from "../../Utils/Images/kisii.jpeg";

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold"> Get in Touch</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            officiis excepturi consequatur a recusandae beatae incidunt
            molestias rerum porro, nulla reprehenderit voluptas placeat
            consectetur nam obcaecati nostrum corrupti cupiditate maiores?
          </p>
        </div>
      </header>
      <div className="container my-5 d-flex justify-content-center ">
        <Form id="contact-form">
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0 ">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First Name" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last Name" />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label> Email </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              we'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Your Address" />
          </Form.Group>
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Location </Form.Label>
              <Form.Select defaultValue="Migori">
                <option> Migori </option>
                <option> Nairobi </option>
                <option> Kisii </option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control placeholder="Postcode" />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Your Message </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger btn-lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className="text -center mb-5">Our locations</h2>
          <div className="row g-4">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={Mig} alt="" className="img-fluid locations-img" />
              <h3 className="text-center mt-3">Migori</h3>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={Kisii} alt="" className="img-fluid locations-img" />
              <h3 className="text-center mt-3">Kisii</h3>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={Nai} alt="" className="img-fluid locations-img" />
              <h3 className="text-center mt-3">Nairobi</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
