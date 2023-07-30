import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <Navbar aboutText="About Us"/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below:"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
