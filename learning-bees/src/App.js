



import './App.css';
import AllRoutes from './Components/AllRoutes';
import Category from './Components/Category';
import Choose from './Components/Choose';
import Details from './Components/Details';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';

import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
 
  return (
    <div className="App">
   {/* <Contact/> */}
   <Navbar/> 
       <AllRoutes/>
    
       {/* <Home/> 
      <Category/>
    
     <Carousal/>
     <Choose/>   */}
   

      {/* <Login/>  */}
 
      {/* <Details/>  */}
      
    </div>
  );
}

export default App;
