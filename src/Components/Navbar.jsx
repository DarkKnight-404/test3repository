import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { useRef } from 'react';
import '../Style/Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    const menuBtnRef = useRef(null);

    const handleCloseMenu = () => {
        if (menuBtnRef.current) {
            menuBtnRef.current.checked = false; // Uncheck the checkbox
        }
    };

    return (
        <>
            <div className='navbar-header' style={{ height: "60px" }}>
                <div className="navbar-container">
                    <a href="/" className="logo">LOGO</a>
                    <input
                        ref={menuBtnRef}
                        className="navbar-menu-btn"
                        type="checkbox"
                        id="menu-btn"
                    />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu" style={{ height: "fit-content" }}>
                        <li onClick={handleCloseMenu}><Link to='/'>Home</Link></li>
                        <li onClick={handleCloseMenu}><Link to='/login'>Login</Link></li>
                        <li onClick={handleCloseMenu}><a href="menu.html">Menu</a></li>
                        <li onClick={handleCloseMenu}><a href="order-online.html">Online Ordering</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
