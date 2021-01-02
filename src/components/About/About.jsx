import React from 'react'
import './About.css'

export default function About() {
    return (
        <section class="section-about" id='section-about'>
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        About me
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small">Who am I?</h3>
                        <p class="paragraph">
                            Born and raised in Barcelona, half American from my father's side, I am a fullstack web developer.
                        </p>

                        <h3 class="heading-tertiary u-margin-bottom-small">What am I like?</h3>
                        <p class="paragraph">
                            I consider myself a calm, sympathetic and assertive person. From a young age I've had a passion
                            for problem-solving and for using logic to tackle obstacles. I also see myself as being a creative person.
                            The combination of all these traits has helped me become the web developer I am today. 
                        </p>

                        <h3 class="heading-tertiary u-margin-bottom-small">What am I looking for?</h3>
                        <p class="paragraph">
                            My goal is to find a job that is challenging, rewarding and where I can continue to
                            grow and improve. 
                        </p>

                    </div>
                    <div class="col-1-of-2">
                        <div class="composition">
                            <img src="img/react-logo.jpg" alt="react" class="composition__photo composition__photo--p1"/>
                            <img src="img/github.png " alt="github" class="composition__photo composition__photo--p2"/>
                            <img src="img/trifecta.png" alt="HTMLCSSJS" class="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
    )
}
