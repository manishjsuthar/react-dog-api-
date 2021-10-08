import React from "react";
import Background from "../images/bg_1.jpg";
import Background1 from "../images/about-1.jpg";
import About from "../images/about.jpg";
import About2 from "../images/about-2.jpg";
import About3 from "../images/about-3.jpg";
function Home() {
  return (
    <div>
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: `url("${Background}")` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-11 ftco-animate text-center">
              <h1 className="mb-4">
                Highest Quality Care For Pets You'll Love{" "}
              </h1>
              <p>
                <a href="/" className="btn btn-primary mr-md-4 py-3 px-4">
                  Learn more <span className="ion-ios-arrow-forward" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-5 d-flex">
              <div
                className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
                style={{ backgroundImage: `url("${Background1}")` }}
              ></div>
            </div>
            <div className="col-md-7 pl-md-5 py-md-5">
              <div className="heading-section pt-md-5">
                <h2 className="mb-4">Why Choose Us?</h2>
              </div>
              <div className="row">
                <div className="col-md-6 services-2 w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-stethoscope" />
                  </div>
                  <div className="text pl-3">
                    <h4>Care Advices</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 services-2 w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-customer-service" />
                  </div>
                  <div className="text pl-3">
                    <h4>Customer Supports</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 services-2 w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-emergency-call" />
                  </div>
                  <div className="text pl-3">
                    <h4>Emergency Services</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 services-2 w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-veterinarian" />
                  </div>
                  <div className="text pl-3">
                    <h4>Veterinary Help</h4>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light ftco-faqs">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-md-last">
              <div
                className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
                style={{ backgroundImage: `url("${About}")` }}
              >
                <a
                  href="https://vimeo.com/45830194"
                  className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-play" />
                </a>
              </div>
              <div className="d-flex mt-3">
                <div
                  className="img img-2 mr-md-2"
                  style={{ backgroundImage: `url("${About2}")` }}
                />
                <div
                  className="img img-2 ml-md-2"
                  style={{ backgroundImage: `url("${About3}")` }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading-section mb-5 mt-5 mt-lg-0">
                <h2 className="mb-3">Frequently Asks Questions</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div
                id="accordion"
                className="myaccordion w-100"
                aria-multiselectable="true"
              >
                <div className="card">
                  <div className="card-header p-0" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        href="#collapseOne"
                        className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <p className="mb-0">How to train your pet dog?</p>
                        <i className="fa" aria-hidden="true" />
                      </button>
                    </h2>
                  </div>
                  <div
                    className="collapse show"
                    id="collapseOne"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="card-body py-3 px-0">
                      <ol>
                        <li>Far far away, behind the word mountains</li>
                        <li>Consonantia, there live the blind texts</li>
                        <li>
                          When she reached the first hills of the Italic
                          Mountains
                        </li>
                        <li>
                          Bookmarksgrove, the headline of Alphabet Village
                        </li>
                        <li>Separated they live in Bookmarksgrove right</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0" id="headingTwo" role="tab">
                    <h2 className="mb-0">
                      <button
                        href="#collapseTwo"
                        className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <p className="mb-0">How to manage your pets?</p>
                        <i className="fa" aria-hidden="true" />
                      </button>
                    </h2>
                  </div>
                  <div
                    className="collapse"
                    id="collapseTwo"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="card-body py-3 px-0">
                      <ol>
                        <li>Far far away, behind the word mountains</li>
                        <li>Consonantia, there live the blind texts</li>
                        <li>
                          When she reached the first hills of the Italic
                          Mountains
                        </li>
                        <li>
                          Bookmarksgrove, the headline of Alphabet Village
                        </li>
                        <li>Separated they live in Bookmarksgrove right</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0" id="headingThree" role="tab">
                    <h2 className="mb-0">
                      <button
                        href="#collapseThree"
                        className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <p className="mb-0">
                          What is the best grooming for your pets?
                        </p>
                        <i className="fa" aria-hidden="true" />
                      </button>
                    </h2>
                  </div>
                  <div
                    className="collapse"
                    id="collapseThree"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="card-body py-3 px-0">
                      <ol>
                        <li>Far far away, behind the word mountains</li>
                        <li>Consonantia, there live the blind texts</li>
                        <li>
                          When she reached the first hills of the Italic
                          Mountains
                        </li>
                        <li>
                          Bookmarksgrove, the headline of Alphabet Village
                        </li>
                        <li>Separated they live in Bookmarksgrove right</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0" id="headingFour" role="tab">
                    <h2 className="mb-0">
                      <button
                        href="#collapseFour"
                        className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <p className="mb-0">
                          What are those requirements for sitting pets?
                        </p>
                        <i className="fa" aria-hidden="true" />
                      </button>
                    </h2>
                  </div>
                  <div
                    className="collapse"
                    id="collapseFour"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="card-body py-3 px-0">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
