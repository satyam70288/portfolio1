import React from "react";
import Typewriter from "typewriter-effect";
// import Resume from "../../assets/docs/resume.txt
import Fade from 'react-reveal/Fade';


import "./Home.css";
const Home = () => {
  return (
    <>
     <div className="container-fluid home-container" id="home">
        <div className="container home-content">
        <Fade left>
          <h1>Hi 🖐 I'm a</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React native developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          </Fade>
          
          <div className="home-buttons">
          <Fade left>
            <button className="btn btn-hire">Hire Me</button>
            </Fade>
            <Fade right>
            <a className="btn btn-cv"  download="your_name.pdf">
              My Resume
            </a>
            </Fade>


          </div>
            
        </div>
      </div>
        </>
  );
};

export default Home;
 