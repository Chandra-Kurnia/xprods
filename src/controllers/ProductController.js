/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ProductView from '../views/ProductView'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getProduct, addProduct, updateProduct, updateStatus } from './actions/productAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductController = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)
    const {product} = useSelector(state => state.products)
    const {loading} = useSelector(state => state.products)
    const [trigger, settrigger] = useState(0)
    const [trash, settrash] = useState(true)
    const [form, setform] = useState({
        id: '',
        name: '',
        qty: '',
        expiredAt: '',
        picture: '',
        isActive: true
    })

    const [formUpdate, setformUpdate] = useState({
        id: product.id,
        name: product.name,
        qty: product.qty,
        expiredAt: product.expiredAt,
        picture: product.picture
    })

    const notify = (msg) => toast(msg)

    useEffect(() => {
        dispatch(getProducts(trash))
    }, [trigger, trash])

    const handleStatus = (id, status) => {
        dispatch(updateStatus(id, status))
        setTimeout(() => {
            if(trigger === 0){
                settrigger(1)
            }else{
                settrigger(0)
            }
            notify('Data successfully updated')
        }, 400);
    }

    const handleForm = (e) => {
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleFormUpdate = (e) => {
        setformUpdate({
            ...formUpdate,
            [e.target.name]: e.target.value
        })
    }

    const showProduct = (id) => {
        dispatch(getProduct(id))
    }

    const handleAddProduct = () => {
        dispatch(addProduct(form))
        setTimeout(() => {
            if(trigger === 0){
                settrigger(1)
            }else{
                settrigger(0)
            }
            notify('Data successfully inserted')
        }, 400);
    }

    const handleUpdateProduct = (id) => {
        dispatch(updateProduct(formUpdate, id))
        setTimeout(() => {
            if(trigger === 0){
                settrigger(1)
            }else{
                settrigger(0)
            }
            notify('Data successfully updated')
        }, 400);
    }

    const switchTrash = () => {
        if(trash === true){
            settrash(false)
            notify('Switch to product')
        }else{
            settrash(true)
            notify('Switch to trash')
        }
    }

    return (
        <div>
            <ToastContainer/>
            <ProductView
            data={products}
            willDelete={(id) => handleStatus(id, false)}
            willRestore={(id) => handleStatus(id, true)}
            handleForm={(e) => handleForm(e)}
            handleAddProduct={handleAddProduct}
            showProduct={(id) => showProduct(id)}
            handleUpdateProduct={(id) => handleUpdateProduct(id)}
            handleFormUpdate={(e) => handleFormUpdate(e)}
            loading={loading}
            switchTrash={switchTrash}
            />
        </div>
    )
}

export default ProductController
