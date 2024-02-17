import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
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
                width="48"
                height="48"
                fill="#dc3545"
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
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-bar">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="text-uppercase">
                {" "}
                Home{" "}
              </Nav.Link>
              <Nav.Link href="/courses" className="text-uppercase">
                {" "}
                Courses{" "}
              </Nav.Link>
              <Nav.Link href="/about" className="text-uppercase">
                {" "}
                About{" "}
              </Nav.Link>
              <Nav.Link href="/blog" className="text-uppercase">
                {" "}
                Blog{" "}
              </Nav.Link>
              <Nav.Link href="/contact" className="text-uppercase">
                {" "}
                Contact{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <div className="container my-5">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg mb-5 mb-md-4"
                >
                  Get in touch
                </button>
              </Link>
              <ul className="footer-social-icons list-unstyled d-flex justify-content-between">
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3535"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      class="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-md-7 col-lg">
              <div className="d-row d-md-flex justify-content-between align-items-center">
                <div className="col-12 col-md col-lg-5">
                  <ul className="footer-navigation list-unstyled mb-0">
                    <Link to="/" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold"> Home</li>
                    </Link>
                    <Link to="/courses" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold"> Course</li>
                    </Link>
                    <Link to="/about" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold"> ABout Us</li>
                    </Link>
                    <Link to="/blog" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold"> Blog</li>
                    </Link>
                    <Link to="/contact" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold"> Get in touch</li>
                    </Link>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <ul className="'list-unstyled mb-0">
                    <li>
                      <p>
                        Main Address - Migori, Kenya.
                      </p>
                    </li>
                    <li>
                      <p>
                        Phone Number - 0700941989
                      </p>
                    </li>
                    <li>
                      <p>
                        Email - msomicollege@gmail.co.ke
                      </p>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
          </div>
          <div className="bg-body-tertiary">
            <div className="container">
              <p className="p-3 m-0 text-center">copyright @ made by Austine Jack Were </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
