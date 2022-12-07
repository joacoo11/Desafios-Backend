const express = require('express')
const ProductManager = require('./product-man')

const app = express()
const manager = new ProductManager('products.json')

app.get('/products', async (req, res) => {
    const products = await manager.getProducts()
    let productLimit = req.query.productLimit
    if(!productLimit){
        return res.send(products)
    }else{
        return res.send(products.slice(0, productLimit))
    }
})

app.get('/products:pid', async (req, res) => {
    const products = await manager.getProducts()

    const pid = req.params.pid

    const product = products.find(p => p.id == pid)
    if(!product){
        res.send({error:'User not found!'})
    }else{
        res.send(user)
    }

})

app.listen(8080)