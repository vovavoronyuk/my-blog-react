import React from 'react'
import './AboutPage.scss'

type Props = {}

const AboutPage = (props: Props) => {
    return (
        <div className="about_page">
            <img src="images/foto.png" alt="" />
            <h1>
                IMPROVE <span>YOUR BRAND</span> WITH AN AWASOME SITE
            </h1>
            <h5>
                COMPREHENSIVE <span>BRAND</span>
            </h5>
            <p className="text-one">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
            </p>
            <h6>
                WEB <span>PRESENCE</span>
            </h6>
            <p className="text-two">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
            </p>
        </div>
    )
}

export default AboutPage
