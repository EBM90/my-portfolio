import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
        <section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Some of my projects
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-3">
                       <div class="card">
                           <div class="card__side card__side--front">
                                <div class="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">Avengers Assemble!</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>HTML, CSS and JS</li>
                                        <li>Responsive</li>
                                        <li>2 games to test your knowledge</li>
                                        <li>Search your hero</li>
                                        <li>Countdown next Marvel movie</li>
                                    </ul>
                                </div>
                           </div>
                           <div class="card__side card__side--back card__side--back-1">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Project #1</p>
                                        <p class="card__price-value">Avengers Assemble!</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Check it out!</a>
                                </div>
                            </div>
                       </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--2">DressApp</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>Handlebars and Mongoose</li>
                                        <li>Your closet in your pocket</li>
                                        <li>Social network with clothes</li>
                                        <li>Upload, create and edit...</li>
                                        <li>Likes, follow, and get notifications</li>
                                    </ul>
                                </div>

                            </div>
                            <div class="card__side card__side--back card__side--back-2">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Project #2</p>
                                        <p class="card__price-value">DressApp</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Check it out!</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                <div class="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--3">IronPadel</span>
                                </h4>
                                <div class="card__details">
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>Book or join a game</li>
                                        <li>Get achievements</li>
                                        <li>Check out your stats</li>
                                        <li>Get notifications</li>
                                    </ul>
                                </div>

                            </div>
                            <div class="card__side card__side--back card__side--back-3">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">Project #3</p>
                                        <p class="card__price-value">IronPadel</p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Check it out!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn btn--green">Check out my GitHub for more</a>
                </div>
            </section>
    )
}
