const express = require('express');

const app = express();
const port = 3000;

const products = [
    { id: 1, name: 'T-shirt', price: "20$", color: "red" },
    { id: 2, name: 'Skirt', price: "15$", color:"green" },
    { id: 3, name: 'Jeans', price: "17$", color:"dark-blue" },
    { id: 4, name: 'Pants', price: "21$", color:"white"},
    { id: 5, name: 'Jacket', price: "25$", color:"black" },
    { id: 6, name: 'Scarf', price: "5$", color:"pink" },
    { id: 7, name: 'Hat', price: "11$", color:"grey" },
    { id: 8, name: 'Glasses', price: "3$", color:"yellow" },
    { id: 9, name: 'Shoes', price: "12$", color:"brown" },
    { id: 10, name: 'Coat', price: "27$", color:"light-blue"},
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
