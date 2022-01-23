import './App.css';
import Header from './components/Homepages/Header';
import Navbar from './components/Homepages/Navbar';
import About from './components/Homepages/About';
import Education from './components/Homepages/Education';
import Experience from './components/Homepages/Experience';
import Projects from './components/Homepages/Projects';
import Contact from './components/Homepages/Contact';
import Login from './components/Homepages/Login';
import Footer from './components/Homepages/Footer';
//admin components
import Admin from './components/adminComponents/Admin';
//edit components
import EditAbout from './components/editComponents/EditAbout';
import EditEducation from './components/editComponents/EditEducation';
import EditProjects from './components/editComponents/EditProjects';
import EditExperience from './components/editComponents/EditExperience';
 
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route  path="/" element={<div>
      {/* <Education/>
      <Header/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>  */}
      </div>}/>


      <Route  path="/Login" element={<Login/>} />
      <Route  path="/Admin" element={<Admin/>} />
      <Route  path="/edit/:id" element={<EditAbout/>} />
      <Route  path="/EditEducation/:id" element={<EditEducation/>} />
      <Route  path="/EditProject/:id" element={<EditProjects/>} />
      <Route  path="/EditExperience" element={<EditExperience/>}/>
      <Route  path="/EditAbout" element={<EditAbout/>}/>
      </Routes>
      {/* <Footer/> */}

    
    </div>
  );
}

export default App;
