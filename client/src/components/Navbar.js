import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    // this will make the navbar close when you select a link
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        //    id checks if(?) navbar is open, if not then(:) it will be closed
        <div className='navbar' id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>

                {/* onClick sets if navbar is previously true then false or vice versa */}
                <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
                    <MenuIcon />
                </button>
            </div>
            <div className='links'>

                <Link to="/"> Home </Link>
                <Link to="/adopt"> Adopt </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/donate"> Donate </Link>

            </div>
        </div>
    );
}

export default Navbar