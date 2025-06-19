import logo from './logo.svg';
import Header from './Components/Header';
import Scores from './Components/Scores';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Series from './Components/Series';
import Fixtures from './Components/Fixtures';
import StatsCorner from './Components/Stats-Corner';
import Rankings from './Components/Rankings';
import About from './Components/About';
import Profile from './Components/Profile';
import Users from './Components/RegisteredUsers';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Series" element={<Series/>}/>
          <Route path="Fixtures" element={<Fixtures/>}/>
          <Route path="StatsCorner" element={<StatsCorner/>}/>
          <Route path="Rankings" element={<Rankings/>}/>
          <Route path="/" element={<Profile/>}/>
      </Routes>
      <About/>
      {/* <Users/> */}
    </BrowserRouter>
  );
}
export default App;

    {/* // <div>
    //     <Navbar/>
    //     <Home/>
    //     <Series/>
    //     <Fixtures/>
    //     <StatsCorner/>
    //     <Rankings/>
    //     <About/>
    // </div> */}