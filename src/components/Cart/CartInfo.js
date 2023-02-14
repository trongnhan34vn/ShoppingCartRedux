import React from 'react'

export default function CartInfo(props) {
    const getTotal = (arr) => {
        return arr.reduce((total, cur) => {
            return total + cur.product.price * cur.quantity
        }, 0)
    }
    return (
        <tfoot id="my-cart-footer">
            {/* CART FOOTER */}
            <tr>
                <th colSpan={6}>Empty product in your cart</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    There are <b>{props.cartList.length}</b> items in your shopping cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                    {+getTotal(props.cartList)} USD
                </td>
            </tr>
        </tfoot>
    )
}
