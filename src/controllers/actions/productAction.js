import axiosInstance from '../../configs/axios';

export const getProducts = (isActive = true) => async (dispatch) => {
  const resultDataProducts = await axiosInstance.get('/product');
  const products = resultDataProducts.data;
  const productsActive = products.filter((element) => {
    return element.isActive === isActive
  })
  dispatch({type: 'getAllProduct', payload: productsActive});
};

export const getProduct = (id) => async (dispatch) => {
  dispatch({type: 'Loading', payload: true});
  const resultDataProduct = await axiosInstance.get(`/product/${id}`);
  const product = resultDataProduct.data;
  dispatch({type: 'getProduct', payload: product});
  dispatch({type: 'Loading', payload: false});
};

export const addProduct = (form) => async (dispatch) => {
  try {
    dispatch({type: 'Loading', payload: true});
    await axiosInstance.post('/product', form);
    dispatch({type: 'Loading', payload: false});
    } catch (error) {
    dispatch({type: 'Loading', payload: false});
    console.log(error);
  }
};

export const updateProduct = (form, id) => async (dispatch) => {
  try {
    dispatch({type: 'Loading', payload: true});
    await axiosInstance.put(`/product/${id}`, form);
    dispatch({type: 'Loading', payload: false});
    } catch (error) {
    dispatch({type: 'Loading', payload: false});
    console.log(error);
  }
};

export const updateStatus = (id, status) => async(dispatch) => {
  try {
    dispatch({type: 'Loading', payload: true});
    await axiosInstance.put(`/product/${id}`, {
      isActive: status
    })
    dispatch({type: 'Loading', payload: false});
  } catch (error) {
    dispatch({type: 'Loading', payload: false});
    console.log(error);
  }
}
