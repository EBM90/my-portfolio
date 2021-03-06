import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                   
                    <label for="navi-toggle" >
                    <li class="navigation__item"><a href="#section-about" class="navigation__link">About me</a></li>
                    </label>
                    
                    
                    <label for="navi-toggle">
                    <li class="navigation__item"><a href="#section-contact" class="navigation__link">Contact me</a></li>
                    </label>
                    
                    <label for="navi-toggle">
                    <li class="navigation__item"><a href="#section-projects" class="navigation__link">My projects</a></li>
            </label>
                    </ul>
            </nav>
        </div>
    )
}
