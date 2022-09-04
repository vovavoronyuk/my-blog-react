import React from 'react'
import './ProductListFour.scss'
type Props = {}

const ProductListFour = (props: Props) => {
    return (
        <div className="container_pro_four">
            <h1>
                WHAT <span>THAY</span> THINK
            </h1>
            <div className="box-one">
                <p>
                    "The public is more familiar with bad design than good
                    design. It is, in effect, conditioned to prefer bad design,
                    because that is what it lives with."
                </p>
                <img src="images/foto2.png" alt="" />
                <h5>PAIGE BRENNAN</h5>
                <h6>Webflow Founder</h6>
            </div>
            <div className="box-two">
                <p>
                    "The public is more familiar with bad design than good
                    design. It is, in effect, conditioned to prefer bad design,
                    because that is what it lives with."
                </p>
                <img src="images/foto1.png" alt="" />
                <h5>CAITLIN WARD</h5>
                <h6>Webflow Founder</h6>
            </div>
            <div className="box-three">
                <p>
                    The public is more familiar with bad design than good
                    design. It is, in effect, conditioned to prefer bad design,
                    because that is what it lives with."
                </p>
                <img src="images/foto3.png" alt="" />
                <h5>MATTHEW WEBSTER</h5>
                <h6>Webflow Founder</h6>
            </div>
            <div className="slider">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
            </div>
        </div>
    )
}

export default ProductListFour
