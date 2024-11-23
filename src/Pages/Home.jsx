import { useNavigate } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
import '../Style/Home.css'

export default function () {
    const navigate = useNavigate();
    return <>
        {/* <header className="header"> */}

        <img style={{width: "100%",  marginTop: "60px"}} src="https://darkknight-404.github.io/app-react/image.png" alt="" srcset="" />

        <div style={{marginTop: "100px"}}>
            
            
        </div>


        {/* </header> */}
    </>
}