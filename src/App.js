
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import {Routes,Route} from "react-router-dom";
import Navbar from './Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/Service" element={<Services/>}></Route>
     <Route path="*" element={<Home/>}></Route>
     
    </Routes>
     </>
  );
}

export default App;
