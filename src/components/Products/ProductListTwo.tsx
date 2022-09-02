import React from 'react'
import './ProductListTwo.scss'

type Props = {}

const ProductListTwo = (props: Props) => {
    return (
        <div className="container_pro_two">
            <p className="we_part">WE PARTNER WITH</p>
            <p className="forward">FORWARD-THINKING</p>
            <p className="startups">STARTUPS</p>
            <img src="/images/icons.png" alt="" className="icon_two" />
            <h1 className="perfect">THE PERFECT</h1>
            <h1 className="agency">AGENCY FOR YOUR BRAND</h1>
            <p className="part_one">
                We love what we do and create partnerships with our clients to
                ensure their digital transformation is positioned for long-term
                success.
            </p>
            <p className="part_two">
                We believe that the human dimensions essential to start any
                successful project and that this is where splendid emotional
                relationships between the company and people are born.
            </p>
            <div className="text-cont">
                <h5>AWWARDS 14</h5>
                <p>
                    Site of the Day <span className="one">3</span>
                </p>
                <p>
                    Developer Award <span className="two">1</span>
                </p>
                <p>
                    Honorable Mention <span className="three">7</span>
                </p>
                <p>
                    Mobile Exelence <span className="four">3</span>
                </p>
            </div>
            <div className="text-cont-one">
                <h5>
                    CSS DESIGN AWWARDS <span>34</span>
                </h5>
                <p>
                    UX Design Award <span className="one">10</span>
                </p>
                <p>
                    UI Design Award <span className="two">4</span>
                </p>
                <p>
                    Innovation Design Award <span className="three">7</span>
                </p>
                <p>
                    Website of the Day <span className="four">13</span>
                </p>
            </div>
        </div>
    )
}

export default ProductListTwo
