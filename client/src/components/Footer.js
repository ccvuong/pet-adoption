import React from 'react';
import "../styles/Footer.css";

// social media links
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from '@mui/material';


function Footer() {
    return (
        <div className="footer">
            <div className='socialMedia'>
                <PetsIcon />
                <p className='footer-links'>
                    <Link to="/"> Home </Link>
                    <Link to="/adopt"> Adopt </Link>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/donate"> Donate </Link>
                </p>
            </div>


        </div>
    );
}

export default Footer