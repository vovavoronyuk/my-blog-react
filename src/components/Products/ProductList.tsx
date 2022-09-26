import React from 'react'
import './ProductList.scss'
type Props = {}

const ProductList = (props: Props) => {
    return (
        <div className="container_pro">
            <img className="roby" src="/images/Roby.png" alt="" />
            <img className="first" src="/images/firstphoto.jpeg" alt="" />
            <h1 className="text_product">“WE BELIEVED THAT </h1>
            <p className="text_P">THE POWER OF DESIGN</p>
            <h1 className="text_product1">HELPS BUSINESSES.” </h1>
            <p className="email">hello@robi.com</p>
            <button className="work_us">WORK WITH US</button>
        </div>
    )
}

export default ProductList
