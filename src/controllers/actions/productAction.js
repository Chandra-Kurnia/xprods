import axiosInstance from "../../configs/axios";

export const getProducts = () => async(dispatch) => {
    const resultDataProducts = await axiosInstance.get('/product')
    const products = resultDataProducts.data;
    dispatch({action: 'getAllProduct', payload: products})
}