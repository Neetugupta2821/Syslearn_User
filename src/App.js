import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './Component/Header';
import Home from './Component/Home/Home';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import DigitalTechnology from './Component/DigitalTechnology';
import Job from './Component/Job';
import WhoWeAre from './Component/WhoWeAre';
import Service from './Component/Service';
import Value from './Component/Value';
import Contact from './Component/Contact';
import Recruitment from './Component/Recruitment';
import AnimaCarsor from './Animation/AnimaCarsor';
import JobDetail from './Component/JobDetail';




function App() {
  console.log("date:04/03/2024 time:04:36")
  return (
    <div className="App">
      {/* <AnimaCarsor></AnimaCarsor> */}
      <Header />
   
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/DigitalTechnology" element={<DigitalTechnology />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Value" element={<Value />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Recruitment" element={<Recruitment />} />
        <Route path="/JobDetail" element={<JobDetail/>} />

      </Routes>
     

      <Footer />




    </div>
  );
}

export default App;
