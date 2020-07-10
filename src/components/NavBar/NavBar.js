import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <div className='nav-main-container'>
            <div className="nav">
                <div className="logo">Logo</div>
                <div className='nav-hamburger' onClick={() => setOpen(!open)}>
                    <div className={ open ? 'close' : "line" }></div>
                    <div className={ open ? 'close-none' : "line" }></div>
                    <div className={ open ? 'close-x' : "line" }></div>
                </div>
            </div>
            <div className={ open ? "show-menu" : "menu-container" }>
                <Link to='/favoritelist' onClick={() => setOpen(!open)}><div className="nav-link-menu site">Favorites</div></Link>
                <Link to='/' onClick={() => setOpen(!open)}><div className="nav-link-menu">Drink list</div></Link>
                <a href="https://www.michaeljamesbeaudry.com/"><div className="nav-link-menu site last">Back to site</div></a>
            </div>
        </div>
    )
}

export default NavBar
