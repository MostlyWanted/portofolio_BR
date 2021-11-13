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
      {/* navbar */}
      <Navbar />
      <Routes>
      <Route  path="/" element={<About/>} />
      <Route  path="/" element={<Header/>} />
      <Route  path="/" element={<Education/>} />
      <Route  path="/" element={<Projects/>} />
      <Route  path="/" element={<Experience/>} />
      <Route  path="/" element={<Contact/>} />


      <Route  path="/Login" element={<Login/>} />
      <Route  path="/Admin" element={<Admin/>} />
      <Route  path="/EditEducation/:id" element={<EditEducation/>} />
      <Route  path="/EditProject/:id" element={<EditProjects/>} />
      <Route  path="/EditExperience" element={<EditExperience/>}/>
      <Route  path="/EditAbout" element={<EditAbout/>}/>
      <Route element={<Footer/>}/>
      </Routes>


    
    </div>
  );
}

export default App;
