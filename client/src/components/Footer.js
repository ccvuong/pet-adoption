import React from 'react';
import "../styles/Footer.css";
import { Link } from 'react-router-dom';

// social media links
import PetsIcon from '@mui/icons-material/Pets';


function Footer() {
    return (
        <div className="footer">
            <div className='socialMedia'>
                <PetsIcon />
                <p className='footer-links'>

                    <Link to="/" id='homeBtn'> Home </Link>
                    <Link to="/adopt" id='adoptBtn'> Adopt </Link>
                    <Link to="/contact" id='contactBtn'> Contact </Link>
                    <Link to="/donate" id='donateBtn'> Donate </Link>

                </p>
            </div>


        </div>
    );
}

export default Footer