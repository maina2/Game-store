import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Store from './pages/Store';
import Profile from './pages/Profile'
import Logout from './components/Logout'
import Signup from './pages/SIgnup';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Action from './pages/Action';
import Adventure from './pages/Adventure'
import Sports from './pages/Sports';
import Roleplaying from './pages/Roleplaying'
import { Context } from "./context/userContext/Context";
import { useContext } from "react";


function App() {
  const {user } =useContext(Context);

  return (
    <div className='body'>

     
      <BrowserRouter>
      <div className="navbar">
      <Navbar/>

      </div>
     
      <div className="minor">
        <div className='sidebar'>
        <Sidebar/>
        </div>
        <div className="content">
        <Routes>

          <Route path="/"       element={<Home/>}/>
          <Route path="/Store"       element={user ? <Store/> :<Home/>}/>
          <Route path="/Profile"       element={ user ?<Profile/> :<Home/>}/>
          <Route path="/Signup"       element={<Signup/> }/>
          <Route path="/Logout"       element={<Logout/> }/>
          <Route path="/Cart"       element={<Cart/> }/>
          <Route path="/Action"       element={<Action/> }/>
          <Route path="/Adventure"       element={<Adventure/> }/>
          <Route path="/Sports"       element={<Sports/> }/>
          <Route path="/Role Playing Games"       element={<Roleplaying/> }/>
          



        </Routes>
        </div>
      
      </div>
      
      </BrowserRouter>

    </div>
  )
}

export default App
