import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import bout from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar expand="lg" className="position-absolute w-100">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="adc3545"
                class="bi bi-backpack"
                viewBox="0 0 16 16"
              >
                <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
              </svg>
              <span className="mx-2 text-light 1h-1 fw-semibold">
                Msomi
                <br></br> College <br></br>
                Migori
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light'/>
          <Navbar.Collapse id="basic-navbar-bar">
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href="/" className="text-uppercase"> Home </Nav.Link>
              <Nav.Link href="/courses" className="text-uppercase"> Courses </Nav.Link>
              <Nav.Link href="/about" className="text-uppercase"> About </Nav.Link>
              <Nav.Link href="/blog" className="text-uppercase"> Blog </Nav.Link>
              <Nav.Link href="/contact" className="text-uppercase"> Contact </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
