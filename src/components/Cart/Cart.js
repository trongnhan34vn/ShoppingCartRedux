import React from 'react'
import CartInfo from './CartInfo'
import CartItem from './CartItem'
import Notify from '../Notify/Notify'
import { useSelector } from 'react-redux'
import { cartSelector } from '../redux/seletor'

export default function Cart() {
    const cartList = useSelector(cartSelector)
    console.log(cartList);
    const elementCartItem = cartList.map((cartItem, index) => {
        return <CartItem stt={index + 1} key={cartItem.product.id} cartItem={cartItem} />
    })
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h1 className="panel-title">Your Cart</h1>
                </div>
                <div className="panel-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="4%">#</th>
                                <th>Pokemon</th>
                                <th width="15%">Price</th>
                                <th width="4%">Quantity</th>
                                <th width="20%">Subtotal</th>
                                <th width="25%">Action</th>
                            </tr>
                        </thead>
                        <tbody id="my-cart-body">
                            {/* CART BODY */}
                            {elementCartItem}
                        </tbody>
                        <CartInfo cartList= {cartList}/>
                    </table>
                </div>
            </div>
            <Notify />
        </div>
    )
}
