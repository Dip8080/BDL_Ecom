import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import All from './Components/Allproduct/All';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="w-full">
     <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/all' element={<All></All>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
