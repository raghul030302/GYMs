import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Premium from './Components/Premium/Premium';
import Footer from './Components/Footer';
import About from './Components/About/About';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Premium" element={<Premium/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
