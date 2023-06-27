import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Store from './pages/Store';
import Profile from './pages/Profile'
import Gallery from './pages/Gallery'
import Logout from './components/Logout'
import Navbar from './components/Navbar';
import { Context } from "./context/userContext/Context";
import { useContext } from "react";


function App() {
  const {user } =useContext(Context);

  return (
    <div className='body'>

     
      <BrowserRouter>
      <Navbar/>
     
      <div className="minor">
        <div className='sidebar'>
        <Sidebar/>
        </div>
        <div className="content">
        <Routes>

          <Route path="/"       element={<Home/>}/>
          <Route path="/Store"       element={user ? <Store/> :<Home/>}/>
          <Route path="/Profile"       element={ user ?<Profile/> :<Home/>}/>
          <Route path="/Gallery"       element={user ?<Gallery/> :<Home/>}/>
          <Route path="/Logout"       element={<Logout/> }/>

        </Routes>
        </div>
      
      </div>
      
      </BrowserRouter>

    </div>
  )
}

export default App
