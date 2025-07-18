const Product = require('../models/product')

exports.createPro = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            res.status(400).json({ message: "all feilds are required" })
        }
        const newProduct = new Product({
            title,
            description,
            user: req.user.id
        })
        await newProduct.save();
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({ message: "product create unsuccessfull" })
    }
}

exports.getPro = async (req, res) => {

    try {
        const product = await Product.find({ user: req.user.id })
        if (product.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }

        res.json(product)
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
}