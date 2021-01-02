import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <header class="header">
            <div class="header__logo-box">
                <img src="img/logo-white.png" alt="Logo" class="header__logo" />
            </div>

            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Welcome</span>
                    <span class="heading-primary--sub">to my portfolio</span>
                </h1>

                <a href="#section-tours" class="btn btn--white btn--animated">Checkout some of my projects</a>
            </div>
        </header>
    )
}

