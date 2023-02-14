import * as types from "../const/actionsType";

export const actBuy = (product, quantity) => {
    return {
        type: types.ACT_ADD,
        payload: {product, quantity}
    }
}

export const actDelete = (id) => {
    return {
        type: types.ACT_DELETE,
        payload: id,
    }
}

export const actUpdate = (product) => {
    return {
        type: types.ACT_UPDATE,
        payload: product
    }
}
/* 
intiiastate: {
    listProduct:[{name: price}]
    cart: [{name: price, quantity:}]
}

reducer: {

}


*/