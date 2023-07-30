import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import PropTypes from "prop-types";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');//whether dark mode is enabled or not
  const [theme,setTheme] = useState(null);

  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() =>{
      setAlert(null)
    },3000)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success")
    } 
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
    }
  }

  const toggleTheme = (event) =>{
    if(event.target.value === 'Green'){
      document.body.style.backgroundColor = '#a0eb9d';
    }else if(event.target.value === 'Red'){
      document.body.style.backgroundColor = '#f5c4b5';
    }else if(event.target.value === 'Blue'){
      document.body.style.backgroundColor = '#83a7de';
    }else if(event.target.value === 'Yellow'){
      document.body.style.backgroundColor = '#dedb83';
    }
  }

  return (
    <>
    
    <Router>
        <Navbar aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleTheme={toggleTheme} />
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode}/>}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
