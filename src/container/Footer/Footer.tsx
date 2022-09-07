import React from 'react'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer">
            <div className="footer-one">
                <img src="images/Roby.png" alt="" width={110} height={63} />
                <h1>ADDRESS</h1>
                <p>14 New South Head Rd</p>
                <p>Triple Bay 3148</p>
                <p>Triple Bay 3148</p>
                <button>FIND ON MAP</button>
                <h2>© This is a Deni Bozo template powered by Webflow.</h2>
            </div>
            <div className="footer-two">
                <h1>SITEMAP</h1>
                <p>Home</p>
                <p>About</p>
                <p>News</p>
                <p>Pricing</p>
                <p>Style Guide</p>
                <p>Image Licensing</p>
            </div>
            <div className="footer-three">
                <div className="logo">
                    <img src="images/fac.png" alt="" />
                    <img src="images/ins.png" alt="" />
                    <img src="images/twi.png" alt="" />
                    <img src="images/in.png" alt="" />
                    <img src="images/bol.png" alt="" />
                </div>
                <h1> CONTACT</h1>
                <p>P: 3740 213 301</p>
                <p>E: contact@robi.com</p>
            </div>
        </div>
    )
}

export default Footer
