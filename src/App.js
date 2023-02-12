import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mystyle, setMystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  const toggleMode = () =>{
    if(mystyle.color=='white'){
      setMystyle({
        color: 'black',
        backgroundColor: 'white'
      });
      document.body.style.backgroundColor = 'white';
      document.title="Text Utils - Light Mode"
    }else{
      setMystyle({
        color: 'white',
        backgroundColor: 'black'
      })
      document.body.style.backgroundColor = 'black';
      document.title="Text Utils - Dark Mode"
    }
  }
  return (
    <Router>
      <div style={mystyle} className="pb-5">
        <Navbar title="TextUtils" toggleMode={toggleMode} mystyle={mystyle}/>
        <Routes>
          <Route exact path="/about" element={<About mystyle={mystyle}/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mystyle={mystyle}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
