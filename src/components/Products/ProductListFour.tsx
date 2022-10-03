import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProductListFour.scss'

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        return (
            <div className="container_pro_four">
                <h1>
                    WHAT <span>THAY</span> THINK
                </h1>
                <Slider {...settings}>
                    <div className="box-one">
                        <p>
                            "The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto2.png" alt="" />
                        <h5>PAIGE BRENNAN</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                    <div className="box-one">
                        <p>
                            "The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto1.png" alt="" />
                        <h5>CAITLIN WARD</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                    <div className="box-one">
                        <p>
                            The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto3.png" alt="" />
                        <h5>MATTHEW WEBSTER</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                    <div className="box-one">
                        <p>
                            "The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto2.png" alt="" />
                        <h5>PAIGE BRENNAN</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                    <div className="box-one">
                        <p>
                            "The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto1.png" alt="" />
                        <h5>CAITLIN WARD</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                    <div className="box-one">
                        <p>
                            The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto3.png" alt="" />
                        <h5>MATTHEW WEBSTER</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                    <div className="box-one">
                        <p>
                            "The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto2.png" alt="" />
                        <h5>PAIGE BRENNAN</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                    <div className="box-one">
                        <p>
                            "The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto1.png" alt="" />
                        <h5>CAITLIN WARD</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                    <div className="box-one">
                        <p>
                            The public is more familiar with bad design than
                            good design. It is, in effect, conditioned to prefer
                            bad design, because that is what it lives with."
                        </p>
                        <img src="images/foto3.png" alt="" />
                        <h5>MATTHEW WEBSTER</h5>
                        <h6>Webflow Founder</h6>
                    </div>
                </Slider>
            </div>
        )
    }
}
