import React from "react";
import "./Featured.css";

import jonash from "../../images/jonash.jpg";
import luis from "../../images/luis.jpg";
import janela from "../../images/woman.png";
import joper from "../../images/joper.jpg";
const Featured = () => {
  return (
    <div>
      <section className="f-plumber-section">
        <p className="f-title">FEATURED MEMBERS IN YOUR LOCATION</p>
        <h1>Top-Rated Experts Ready to Serve</h1>
        <div className="f-cards">
          <a href="/profile">
            <div className="f-card">
              <span className="f-close" />
              <span className="f-arrow" />

              <article>
                <h2 className="f-h2">Jonash Bundalian</h2>
                <div className="f-title">Cloud Architect</div>
                <div className="f-pic">
                  <img className="f-avatar" src={jonash} />
                </div>
                <div className="desc">
                  {" "}
                  A computer engineer who joined Breen Design Group in 2016. He
                  works with the Electrical department on low-voltage projects
                  ...
                </div>
              </article>
            </div>
          </a>

          <a href="/luis">
            <div className="f-card">
              <span className="f-close" />
              <span className="f-arrow" />
              <article>
                <h2 className="f-h2">Luis Jimenez</h2>
                <div className="f-title">Role Name</div>
                <div className="f-pic">
                  <img className="f-avatar" src={luis} />
                </div>
                <div className="desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                  in provident. Porro quis quae iure laborum.
                </div>
              </article>
            </div>
          </a>

          <a href="/profile">
            <div className="f-card">
              <span className="f-close" />
              <span className="f-arrow" />
              <article>
                <h2 className="f-h2">Janela Pangan</h2>
                <div className="f-title">Role Name</div>
                <div className="f-pic">
                  <img className="f-avatar" src={janela} />
                </div>
                <div className="desc">
                  Morgan has collected ants since they were six years old and now
                  has many dozen ants but none in their pants.
                </div>
              </article>
            </div>
          </a>
          <a href="/joper">
            <div className="f-card">
              <span className="f-close" />
              <span className="f-arrow" />
              <article>
                <h2 className="f-h2">Joper Tupas</h2>
                <div className="f-title">Plumbing Engineer</div>
                <div className="f-pic">
                  <img className="f-avatar" src={joper} />
                </div>
                <div className="desc">
                  Adrian has collected flies since they were six years old and now
                  has many dozen flies but none in their pants.
                </div>
              </article>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Featured;
