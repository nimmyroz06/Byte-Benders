import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LearnMore from './components/LearnMore';
import GetStarted from './components/GetStarted';
import Calc from './components/Calc';
import ReuseTrack from './components/ReuseTrack';
import Pledge from './components/Pledge';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/learnmore' element={<LearnMore/>}/>
      <Route path='/getstarted' element={<GetStarted/>}/>
      <Route path='/calc' element={<Calc/>}/>
      <Route path='/reusetrack' element={<ReuseTrack/>}/>
      <Route path='/pledge' element={<Pledge/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
