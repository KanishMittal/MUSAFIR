import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quickLinks1 = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const quickLinks2 = [
  { path: "/gallery", display: "Gallery" },
  { path: "/login", display: "Login" },
  { path: "/register", display: "Register" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="12">
            <div className="logo">
              <img src={logo} alt="Website Logo" />
              <p>Discover breathtaking destinations, unique experiences, and unforgettable adventures.</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="/" aria-label="YouTube">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="/" aria-label="GitHub">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="/" aria-label="Facebook">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="/" aria-label="Instagram">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12">
            <h5 className="footer__link-title">Discovery</h5>
            <ListGroup className="footer__quick-links">
              {quickLinks1.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="12">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quickLinks2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="12">
            <h5 className="footer__link-title">Contact Us</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Haryana, India</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">mittalkanish21@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">+91 97296-89318</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              © {year}, designed and developed by Kanish Mittal. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
