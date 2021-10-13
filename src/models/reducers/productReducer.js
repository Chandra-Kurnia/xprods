const initialState = {
    products: [],
    product: {},
    loading: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getAllProduct':
        return {
            ...state,
            products: action.payload
        }
        case 'getProduct':
            return{
                ...state,
                product: action.payload
            }
        case 'Loading':
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default productReducer