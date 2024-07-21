
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import About from './components/About';
import Footer from './components/Footer';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type.toLowerCase().trim()
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#29386f';
      document.body.style.color = 'white';
      showAlert("Dark mode Enabled", " Success ! ");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode Enabled ", " Success ! ");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="AnalyzeIt" page="About" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar />    */}
        {/* // Default proptype loading */}

        {/* // Container is a bootstrap class that provides a container to make appealing */}
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/" element={<div className="container">
            <TextForm showAlert={showAlert} heading="Welcome to your Text Analyzer" />
          </div>} /> */}
          {/* <Route path="/about" element={<About />} /> */}

        {/* </Routes> */}
        {/* <Footer/> */}

      {/* </Router> */}
      <div className="container">
            <TextForm showAlert={showAlert} heading="Welcome to your Text Analyzer" />
          </div>
          <Footer/>
      
    </>
  );
}

export default App;
