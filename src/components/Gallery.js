import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bg2 from "../images/bg_2.jpg";
function Gallery() {
  const [posts, setposts] = useState([""]);
  const [breed, setbreed] = useState([""]);
  const [select, setselect] = useState("");
  useEffect(() => {
    getList();
  }, []);
  const getDogImage = () => {
    fetch("https://dog.ceo/api/breed/" + select + "/images/random/10")
      .then((res) => res.json())
      .then((data) => setbreed(data.message))
      .catch((err) => console.error("Error: ", err));
  };

  const getList = () => {
    fetch("https://dog.ceo/api/breeds/list")
      .then((res) => res.json())
      .then((data) => setposts(data.message))
      .catch((err) => console.error("Error: ", err));
  };

  const handleSelect = (e) => {
    setselect(e.target.value);
  };
  return (
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
          <h1 style={{ textAlign: "center" }}>Gallery</h1>
        </section>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <select
            value={select}
            onChange={handleSelect}
            style={{ fontSize: "2.5rem" }}
          >
            {posts.map((e) => (
              <option value={e}> {e} </option>
            ))}
          </select>
          <button id="submit" disabled={!select} onClick={getDogImage}>
            submit
          </button>
        </div>
        <section className="ftco-section">
          <div className="container">
            <ul>
              <div className="row">
                {breed.map((post) => (
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
  );
}

export default Gallery;
