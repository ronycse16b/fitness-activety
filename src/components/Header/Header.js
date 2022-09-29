import React from 'react';
import logo from '../../image/logo.png';
import './Header.css'

const Header = () => {
    return (
      <section>
          <div className='header-container'>
            <div className='logo'>
            <img src={logo} alt="" /> <strong>Gym Fitness</strong>

            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Your Activety</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>
      </section>
    );
};

export default Header;