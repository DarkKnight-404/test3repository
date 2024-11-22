import logo from './logo.svg';
import './App.css';
import UserContext from './Context/UserContext';
import { useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style/Login.css'
import Navbar from './Components/Navbar';


function App() {
  const [userData, setUserData] = useState({});
  const [isUserLogged,setUserLoggedStatus] = useState(false);
  return (
    <div style={{ overflowX: "hidden" }}>
      <>
        <Navbar />


        <UserContext.Provider value={{ userData, setUserData , isUserLogged, setUserLoggedStatus}}>



          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>



        </UserContext.Provider>
      </>
    </div>
  )
}

export default App;
