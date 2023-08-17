import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './components/Pages/About/About';
// import Teckstack from './components/Pages/Teckstack/Teckstack';
import Techstack from './components/Pages/Techstack/Techstack';

function App() {
  return (
    <div>
      <Layout/>
      <div className='container'>
      <About/>
  
      </div>
      <Techstack/>
        </div>
        
  );
}

export default App;
