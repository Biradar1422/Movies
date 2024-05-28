
import './App.css'
import About from './Components/About'
import Api from './Components/Api'
import Api2 from './Components/Api2'
import Home from './Components/Home'
import Movies from './Components/Movies'
import NavComp from './Components/NavComp'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  

  return (
    <>
  

      <Router>

        <NavComp/>

        <Routes>

          <Route  path="/" element={<Home/>}/>
          <Route  path="/movies" element={<Movies/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/api" element={<Api/>}/> 
          <Route  path="/api2" element={<Api2/>}/>  

        </Routes>

      </Router>

      
    </>
  );
}

export default App
