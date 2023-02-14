let initState = []

let cart = JSON.parse(localStorage.getItem('shopping-cart'))

initState = (cart === null) ? initState : cart

const getCartItemId = (cart, productId) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id === productId) {
            return i
        }
    }
    return -1
}

const getId = (arr, productId) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].product.id === productId) {
            return i
        }
    }
    return false
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BUY_PRODUCT':
            // Mua hàng
            if (state.length == 0) {
                let newCartItem = {
                    product: action.payload.product,
                    quantity: action.payload.quantity,
                }
                state = [...state, newCartItem]
                localStorage.setItem('shopping-cart', JSON.stringify(state))
                return state
            } else {
                let index = getCartItemId(state, action.payload.product.id)
                // Khách đã mua hàng chưa tồn tại trong giỏ hàng
                if (index === -1) {
                    let cartNew = {
                        product: action.payload.product,
                        quantity: action.payload.quantity,
                    }
                    state = [...state, cartNew]
                } else {
                    // Khách mua hàng đã tồn tại trong giỏ hàng 
                    state[index].quantity += action.payload.quantity
                }
                localStorage.setItem('shopping-cart', JSON.stringify(state))
                return [...state]
            }
        case 'DELETE_PRODUCT':
            const newArr = state.filter((cart) => {
                return (cart.product.id !== action.payload)
            })
            localStorage.setItem('shopping-cart', JSON.stringify(newArr))
            return newArr;
        case 'UPDATE_PRODUCT':
            let index = getId(state, action.payload.product.id)
            console.log(action.payload);
            state[index].quantity = action.payload.quantity
            localStorage.setItem('shopping-cart', JSON.stringify(state))
            return [...state]
        default:
            return state
    }
}

export default cartReducer