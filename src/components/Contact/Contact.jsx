import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <section class="section-features" id="section-contact">
                
                <div class="row">
                    <div class="col-1-of-3">
                        <div class="feature-box">
                            <img src="/img/linkedin.png" alt="linkedin" style={{width: 80}} />
                            <h3 class="heading-tertiary u-margin-bottom-small">LinkedIn</h3>
                            <a class="feature-box__text" target='_blank' href='https://www.linkedin.com/in/eric-blair-martinez/' rel="noreferrer">
                                Checkout my LinkedIn page
                            </a>
                        </div>
                    </div>

                    <div class="col-1-of-3">
                        <div class="feature-box">
                        <img src="/img/github-logo.png" alt="github" style={{width: 40}} />
                            <h3 class="heading-tertiary u-margin-bottom-small">GitHub</h3>
                            <a class="feature-box__text" target='_blank' href='https://github.com/EBM90' rel="noreferrer">
                                See some of my other projects at GitHub
                            </a>
                        </div>
                    </div>

                    {/* <div class="col-1-of-4">
                        <div class="feature-box">
                        <img src="/img/cv.png" alt="cv" style={{width: 40}} />
                            <h3 class="heading-tertiary u-margin-bottom-small">CV</h3>
                        </div>
                    </div> */}

                    <div class="col-1-of-3">
                        <div class="feature-box">
                        <img src="/img/gmail.png" alt="gmail" style={{width: 50}} />
                            <h3 class="heading-tertiary u-margin-bottom-small">Gmail</h3>
                            <p class="feature-box__text">
                                Send me an email at: erbmart7@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    )
}
