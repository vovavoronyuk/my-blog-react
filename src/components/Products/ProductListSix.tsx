import React from 'react'
import './ProductListSix.scss'
type Props = {}

const ProductListSix = (props: Props) => {
    return (
        <div className="container_pro_six">
            <h1>
                OUR <span>BLOG</span>
            </h1>
            <div className="circle">VIEW ALL POST</div>
            <div className="one">
                <img src="images/11.png" alt="" />
                <button>MARKETING</button>
                <h2>CURATING A WORKPLACE THAT INSPIRES ALL OF US</h2>
                <p>February 3, 2021</p>
            </div>
            <div className="two">
                <img src="images/12.png" alt="" />
                <button>DESIGN</button>
                <h2>DESIGNERS WHO CHANGED THE WEB WITH WEBFLOW</h2>
                <p>February 25, 2021</p>
            </div>
            <div className="three">
                <img src="images/13.png" alt="" />
                <button>CODE</button>
                <h2>COMMUNICATION BETWEEN STUDIO DEPARTMENTS</h2>
                <p>March 9, 2021</p>
            </div>
            <div className="lets_talk">
                <h1>
                    LET'S <span>TALK</span>
                </h1>
                <p>Feel free to contact us</p>
                <div className="circle-one">VIEW ON DESIGNER</div>
            </div>
        </div>
    )
}

export default ProductListSix
