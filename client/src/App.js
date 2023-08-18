import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './components/Pages/About/About';
// import Teckstack from './components/Pages/Teckstack/Teckstack';
import Techstack from './components/Pages/Techstack/Techstack';
import Project from './components/Pages/Projects/Project';
import Education from './components/Pages/Educations/Education';
import WorkExp from './components/Pages/workExp/WorkExp';
import Contact from './components/Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Layout/>
      <div className='container'>
      <About/>
      <Education/>
  
      </div>
      <Techstack/>
      <WorkExp/>
      <Project/>
      <Contact/>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made With 😍 Satyam &copy; 2023</h4>
</div>
        </div>
        
  );
}

export default App;
