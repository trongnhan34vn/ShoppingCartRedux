const initState = [
    {
        id: 'P001',
        name: 'Pizza',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        src: 'images/pizza.jpg'
    },
    {
        id: 'P002',
        name: 'Hamburger',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        src: 'images/Hamburger.jpg'
    },
    {
        id: 'P003',
        name: 'Cake',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        src: 'images/Cake.jpg'
    },
    {
        id: 'P004',
        name: 'Bread',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        src: 'images/bread.jpg'
    },
]

const listProductsReducer = (state = initState, action) => {
    return state
}

export default listProductsReducer