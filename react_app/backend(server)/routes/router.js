const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Home Placeholder');
  });

router.get('/products', (req, res) => {
    const productData = [

        {
            "id": 1,
            "product": "Blue Speckle Jug",
            "price": "£25.99"
        }


    ]

    res.send(productData)
})

module.exports = router;