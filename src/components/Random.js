import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bg2 from "../images/bg_2.jpg";

function Random() {
  const [random, setrandom] = useState([]);

  useEffect(() => {
    getRandomImage();
  }, []);

  const getRandomImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((res) => res.json())
      .then((data) => setrandom(data.message))
      .catch((err) => console.error("Error: ", err));
  };
  return (
    <div>
      <div>
        <div>
          <section
            className="hero-wrap hero-wrap-2"
            style={{ backgroundImage: `url("${Bg2}")` }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text align-items-end">
                <div className="col-md-9 ftco-animate pb-5">
                  <p className="breadcrumbs mb-2">
                    <span className="mr-2">
                      <Link to="/">
                        Home <i className="ion-ios-arrow-forward" />
                      </Link>
                    </span>{" "}
                    <span>
                      Gallery <i className="ion-ios-arrow-forward" />
                    </span>
                  </p>
                  <h1 className="mb-0 bread">Gallery</h1>
                </div>
              </div>
            </div>
          </section>

          <h1 style={{ textAlign: "center" }}>Random Pic</h1>
          <section className="ftco-section">
            <div className="container">
              <ul>
                <div className="row">
                  {random.map((post) => (
                    <div className="col-md-4">
                      <div className="work mb-4 img d-flex align-items-end">
                        <li>
                          <img src={post} alt="pic" />
                        </li>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Random;
