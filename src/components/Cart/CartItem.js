import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actDelete, actUpdate } from '../actions/actions'

export default function CartItem(props) {
    const { cartItem, stt } = props
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        if(cartItem.quantity > 0) {
            setQuantity(cartItem.quantity)
        } 
    },[cartItem.quantity])
    const dispatch = useDispatch()
    const handleDelete = (id) => {
      dispatch(actDelete(id))
    }

    const handleUpdate = (product) => {
        let update = {...product, quantity: +quantity}
        console.log(update);
        dispatch(actUpdate(update))
    }
    
    return (
        <tr>
            <th scope="row">{stt}</th>
            <td>{cartItem.product.name}</td>
            <td><span>{cartItem.product.price}</span> USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </td>
            <td>
                <strong><span>{quantity * cartItem.product.price}</span> USD</strong>
            </td>
            <td>
                <a
                    className="label label-info update-cart-item"
                    href="#"
                    data-product=""
                    onClick={() => handleUpdate(cartItem)}
                >
                    Update
                </a>
                <a
                    className="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                    onClick={() => handleDelete(cartItem.product.id)}
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}
