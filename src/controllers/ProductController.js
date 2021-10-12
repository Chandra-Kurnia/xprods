/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ProductView from '../views/ProductView'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from './actions/productAction'

const ProductController = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div>
            <ProductView
            />
        </div>
    )
}

export default ProductController
