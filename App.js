import logo from './logo.svg';
import './App.css';
import 
First from './First';
import {Routes,Router, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Noyfound from './Noyfound';
import Navbar from './Navbar';
import Details from './Details';



function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} /> 
  <Route path='about' element={<About/>}/>
  <Route path='detail' element={<Details/>}/>

  <Route path='*' element={<Noyfound/>}/>

</Routes>
    </>




  );
}

export default App;
