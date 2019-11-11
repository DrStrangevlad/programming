const cart = [
    {
        name: 'Product_1',
        count: 1,
        price: 3000
    },
    {
        name: 'Product_2',
        count: 2,
        price: 2000
    },
    {
        name: 'Product_3',
        count: 3,
        price: 1000
    },
];
let total = 0;
function CountBasketPrice(total) {
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total += product.price * product.count;
    }
    console.log(total);
}
CountBasketPrice(total);