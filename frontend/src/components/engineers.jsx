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
    <>
      <div className="engineers-header">
        <h3>Meet The Engineers</h3>
      </div>
      <div className="body_box">
        <div className="engineers-about">
          <div className="about-content">
            <img src={bryan} alt="engineer" className="text-images" />
            <h4>Bryan Sillorequez</h4>
            <p>
              Bryan Sillorequez is a software engineer with an eye for design.
              Before software engineering, he was a photographer, which allows 
              him to apply his technical design background to create eye-catching
              apps with good functionality.  When he is not coding, you can find
              him thousands of feet up a rock face.  
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
              Sheava Danesh is a software developer specializing in both
              frontend and backend frameworks. She has created many web apps
              including an Amazon clone with full customer-focused
              functionality. She graduated from UC Irvine with a BS degree in
              Public Health in 2019 and likes to volunteer and give back to her
              community in her free time.
            </p>
            <div className="social-links">
              <a href="https://github.com/sheavadanesh">
                <img src={github} alt="github" className="social-emblem" />
              </a>
              <a href="https://www.linkedin.com/in/sheava-danesh-088818137/">
                <img src={linkedin} alt="linkedin" className="social-emblem" />
              </a>
            </div>
          </div>
          <div className="about-content">
            <img src={ahmad} alt="engineer" className="text-images" />
            <h4>Ahmad Alqadhy</h4>
            <p>
              Ahmad Alqadhy is a full stack software developer with experience
              in web apps and game development. He designed and built a Tumblr
              clone enabling users to upload media, interact with other users,
              and create personalized blogs. Ahmad’s background is Tech Strategy
              Consulting and has provided client services for Uber, Adobe, and
              Dropbox as well as many other Bay Area based software companies
            </p>
            <div className="social-links">
              <a href="https://github.com/ahmadalqadhy">
                <img src={github} alt="github" className="social-emblem" />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-alqadhy-1895a6161/">
                <img src={linkedin} alt="linkedin" className="social-emblem" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Engineers