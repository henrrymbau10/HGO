import React from 'react'
import "./Navbar.scss"

export const Navbar = () => {

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
            </div>
        </div>
    )
}
