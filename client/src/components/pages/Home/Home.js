import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
//import Resume from '../../assets/docs/resume.pdf'
const Home = () => {
  return (
    <>
    <div className='container-fluid home-container'>
      <div className='container home-content' >
        <h1>
            Hi I'm a
        </h1>
        
        <h1>
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
            </h1>
            <div className='home-buttons'>
            <button className='btn btn-hire'>HIre Me</button>
            <button className='btn btn-cv'>Resume</button>

        </div>
        </div> 
    </div>
    </>
  )
}

export default Home