import React, { useState } from 'react'
import "./Navbar.scss"
import { Menu, MobileIcon, MobileIcon2 } from './NavbarItem';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)
        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__container__logo">
                    <h2>Logo</h2>
                </div>
                <div className="navbar__container__list">
                    <p onClick={() => scrollTo('.main__container1')}>¿QUE ME APORTARA?</p>
                    <button onClick={() => scrollTo('.access')}>PRUEBALO YA</button>
                </div>
                <div className="navbar__container__mobile">
                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <FaBars />
                    </MobileIcon>

                    <Menu open={showMobileMenu}>

                        <MobileIcon2 onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <FaTimes />
                        </MobileIcon2>
                        <p onClick={() => { scrollTo(('.main__container1')); setShowMobileMenu(!showMobileMenu) }}>¿QUE ME APORTARA?</p>
                        <p onClick={() => { scrollTo(('.access')); setShowMobileMenu(!showMobileMenu) }}>PRUEBALO YA</p>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
