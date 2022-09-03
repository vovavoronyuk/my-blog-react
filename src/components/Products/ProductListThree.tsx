import React from 'react'
import './ProductListThree.scss'
type Props = {}

const ProductListThree = (props: Props) => {
    return (
        <div className="container_pro_three">
            <h1>SELECTED</h1>
            <h2>WORK</h2>
            <div className="one">
                <img src="images/1.png" alt="" />
                <h5>CONFERENCE</h5>
                <p>Art Direction, Design</p>
            </div>
            <div className="two">
                <img src="images/2.png" alt="" />
                <h5>MAGAZINE</h5>
                <p>Logo, User Interface</p>
            </div>
            <div className="three">
                <img src="images/3.png" alt="" />
                <h5>IVOR APLICATION</h5>
                <p>User Interface</p>
            </div>
            <div className="four">
                <img src="images/4.png" alt="" />
                <h5>BLACK APPLE WATCH</h5>
                <p>Logo, User Interface</p>
            </div>
            <div className="five">
                <img src="images/5.png" alt="" />
                <h5>FLYING TO THE MOON</h5>
                <p>User Experiences</p>
            </div>
            <div className="six">
                <img src="images/6.png" alt="" />
                <h5>DHARMA WEBFONT</h5>
                <p>Branding, Web Design</p>
            </div>
            <div className="seven">
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
        </div>
    )
}

export default ProductListThree
