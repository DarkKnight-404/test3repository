import { useNavigate } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
import '../Style/Navbar.css'

export default function () {
    const navigate = useNavigate();
    return <>
        {/* <header className="header"> */}
        {/* <div id="bar" style={{width: "100%", height: "200px", backgroundColor: "green"}}></div> */}
        <div className='navbar-header' style={{height: "60px"}}>
            <div className="navbar-container">
                <a href="/" className="logo">LOGO</a>
                <input className="navbar-menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                <ul className="menu" style={{height: "60px"}}>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/login' >Login</Link></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="order-online.html">Online Ordering</a></li>

                </ul>
            </div>
        </div>


        {/* </header> */}
    </>
}