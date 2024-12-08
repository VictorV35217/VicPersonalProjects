import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Projects from './components/pages/projects'
import Skills from './components/pages/skils'
import Contact from './components/pages/contact'

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
