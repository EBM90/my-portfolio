import React from 'react'
import './About.css'

export default function About() {
    return (
        <section class="section-about">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Who is Eric Blair Martinez?
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small">Passion for coding</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 class="heading-tertiary u-margin-bottom-small">Problem-solver extraordinaire</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                    </div>
                    <div class="col-1-of-2">
                        <div class="composition">
                            <img src="img/react-logo.jpg" alt="Photo 1" class="composition__photo composition__photo--p1"/>
                            <img src="img/github.png " alt="Photo 2" class="composition__photo composition__photo--p2"/>
                            <img src="img/trifecta.png" alt="Photo 3" class="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
    )
}
