import React from "react";
import { Link } from "react-router-dom";
// import image1 from "/images/image_1.jpg";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Petsitting</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul className="ftco-footer-social p-0">
                <li className="ftco-animate">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-4 pl-lg-5 mb-4 mb-md-0">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="py-2 d-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="py-2 d-block">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/random" className="py-2 d-block">
                    Random Pic
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map" />
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a href="/">
                      <span className="icon fa fa-phone" />
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span className="icon fa fa-paper-plane" />
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
