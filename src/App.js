
import './App.css';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Resume from './Components/Resume';
import Projects from "./Components/Projects"
import Contacts from "./Components/Contacts"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState(true)
  return (
    <>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

      </BrowserRouter>
      <div className='flex'>
        <Sidebar />
        <Body theme={theme} />
      </div>
    </>
  )
}
export default App;
