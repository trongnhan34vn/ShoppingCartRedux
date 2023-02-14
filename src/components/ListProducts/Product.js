import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actBuy } from '../actions/actions'

export default function Product(props) {
    const { product } = props
    const [quantity, setQauntity] = useState(1)
    const dispatch = useDispatch()
    const handleBuy = () => {
        dispatch(actBuy(product, +quantity))
        setQauntity(1)
    }
    return (
        <div className="media product">
            <div className="media-left">
                <a href="#">
                    <img
                        className="media-object"
                        src={product.src}
                        alt="pizza"
                    />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{product.name}</h4>
                <p>
                    {product.title}
                </p>
                <input
                    name="quantity-product-1"
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQauntity(e.target.value)}
                />
                <a onClick={handleBuy} data-product={1} href="#" className="price">
                    {" "}
                    {product.price} USD{" "}
                </a>
            </div>
        </div>
    )
}
