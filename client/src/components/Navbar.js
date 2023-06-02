import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

                <Link to="/" id='homeBtn'> Home </Link>
                <Link to="/adopt" id='adoptBtn'> Adopt </Link>
                <Link to="/contact" id='contactBtn'> Contact </Link>
                <Link to="/donate" id='donateBtn'> Donate </Link>

            </div>

            <div className='userProfile'>
                <FavoriteIcon />
                <Link to="/signup" id='signUpBtn'>Sign Up </Link>
                <Link to="/signin" id='signInBtn'> Log In <AccountCircleIcon /> </Link>

            </div>

        </div>

    );
}

export default Navbar