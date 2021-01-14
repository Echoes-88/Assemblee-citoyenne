import React from 'react';

import './style.scss';
import Navbar from '../../containers/Navbar';

const Header = () => {


    return (
        <>
        <div className="header">
            <div className="logo"></div>
            <Navbar />
        </div>
        </>
    )
}

  // == Export
  export default Header;
  