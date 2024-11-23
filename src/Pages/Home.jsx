import { useNavigate } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
import '../Style/Home.css'
import image from '../images/image.png'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

export default function () {
    const navigate = useNavigate();
    let {isUserLogged} = useContext(UserContext);
    return <>
        {/* <header className="header"> */}


        <div style={{marginTop: "100px"}}>

            {isUserLogged ? <h1>Hello Welcome to the page</h1> : <h1>Please Login</h1>}
            <h1 style={{marginBottom: "600px"}}>{isUserLogged ? <h1>Welcome!</h1>:<></>}</h1>
            
            
        </div>


        {/* </header> */}
    </>
}