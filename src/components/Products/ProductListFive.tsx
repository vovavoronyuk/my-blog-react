import React from 'react'
import './ProductListFive.scss'

type Props = {}

const ProductListFive = (props: Props) => {
    return (
        <div className="container_pro_five">
            <img src="images/people.png" alt="" />
            <div className="box">
                <h1>
                    OUR <span>TEAM</span> SKILLS
                </h1>
                <p className="design">
                    GRAPHIC DESIGN <span>80%</span>
                </p>
                <p className="lead">
                    LEAD GENERATION <span>41%</span>
                </p>
                <p className="photo">
                    PHOTOSHOP <span>70%</span>
                </p>
                <p className="illus">
                    ILLUSTRATION <span>100%</span>
                </p>
                <p className="else">
                    * Over 8 years creating templates on Marketplace.
                </p>
            </div>
        </div>
    )
}

export default ProductListFive
