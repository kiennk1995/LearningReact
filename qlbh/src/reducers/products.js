var initialState = [
    {
        id: 1,
        name: 'Iphone 7+',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132',
        description: 'Sản phẩm Apple 1',
        price: 400,
        inventory: 15,
        rating : 4
    },
    {
        id: 2,
        name: 'Iphone 8+',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132',
        description: 'Sản phẩm Apple 2',
        price: 500,
        inventory: 15,
        rating : 3
    },
    {
        id: 3,
        name: 'Iphone 9+',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132',
        description: 'Sản phẩm Apple 3',
        price: 600,
        inventory: 15,
        rating : 0
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }

}

export default products;