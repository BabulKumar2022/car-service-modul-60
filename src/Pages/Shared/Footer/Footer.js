import React from 'react';
import './Footer.css'

const today = new Date();
const year = today.getFullYear();
const Footer = () => {
    return (
        <div>
            <footer className='text-center footer-area bg-dark ' sticky='bottom'>
                <p className='footer-text'> <small>Copyright@copy{year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;