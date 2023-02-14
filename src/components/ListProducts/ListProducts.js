import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'
import { listProductsSelector } from '../redux/seletor'



export default function ListProducts() {
    const listProducts = useSelector(listProductsSelector)
    const elementProduct = listProducts.map((product, index) => {
        return <Product key={product.id} stt={index + 1} product={product} />
    })
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                    {/* PRODUCT : START */}
                    {elementProduct}
                    {/* PRODUCT : END */}
                </div>
            </div>
        </div>
    )
}
