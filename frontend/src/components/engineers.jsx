import React from 'react'
import bryan from "../images/bryan_sillorequez.jpg";
import sheava from "../images/Sheava_Danesh.jpeg";
import ahmad from "../images/ahmad_alqadhy.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import www from "../images/www.png";
import '../scss/layout/engineers.scss'

const Engineers = () => {
  return (
    <div className="body_box">
      <div className="engineers-header">
        <h3>Meet The Engineers</h3>
      </div>
      <div className="engineers-about">
        <div className="about-content">
          <img src={bryan} alt="engineer" className="text-images" />
          <h4>Bryan Sillorequez</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            repellendus magni perferendis. Inventore laborum veniam quam
            reprehenderit vitae minus repudiandae quisquam ipsa repellendus!
            Quae, rem. Provident odit dolore molestiae velit!
          </p>
          <div className="social-links">
            <a href="https://github.com/bvsillorequez">
              <img src={github} alt="github" className="social-emblem" />
            </a>
            <a href="http://www.linkedin.com/in/bsillo">
              <img src={linkedin} alt="linkedin" className="social-emblem" />
            </a>
            <a href="http://bryan.sillorequez.com">
              <img src={www} alt="www" className="social-emblem" />
            </a>
          </div>
        </div>
        <div className="about-content">
          <img src={sheava} alt="engineer" className="text-images" />
          <h4>Sheava Danesh</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            repellendus magni perferendis. Inventore laborum veniam quam
            reprehenderit vitae minus repudiandae quisquam ipsa repellendus!
            Quae, rem. Provident odit dolore molestiae velit!
          </p>
          <div className="social-links">
            <a href="https://github.com/bvsillorequez">
              <img src={github} alt="github" className="social-emblem" />
            </a>
            <a href="http://www.linkedin.com/in/bsillo">
              <img src={linkedin} alt="linkedin" className="social-emblem" />
            </a>
            <a href="http://bryan.sillorequez.com">
              <img src={www} alt="www" className="social-emblem" />
            </a>
          </div>
        </div>
        <div className="about-content">
          <img src={ahmad} alt="engineer" className="text-images" />
          <h4>Ahmad Alqadhy</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            repellendus magni perferendis. Inventore laborum veniam quam
            reprehenderit vitae minus repudiandae quisquam ipsa repellendus!
            Quae, rem. Provident odit dolore molestiae velit!
          </p>
          <div className="social-links">
            <a href="https://github.com/bvsillorequez">
              <img src={github} alt="github" className="social-emblem" />
            </a>
            <a href="http://www.linkedin.com/in/bsillo">
              <img src={linkedin} alt="linkedin" className="social-emblem" />
            </a>
            <a href="http://bryan.sillorequez.com">
              <img src={www} alt="www" className="social-emblem" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engineers