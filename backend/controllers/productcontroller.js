const Product = require('../models/product')

exports.createPro = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            res.status(400).json({ message: "all feilds are required" })
        }
        const newproduct = new Product({
            title,
            description
        })
        await newproduct.save();
        res.json(newproduct)
    } catch (error) {
        res.status(500).json({ message: "product create unsuccessfull" })
    }
}

exports.getPro = async (req, res) => {
    try {
        const product = await Product.find()
        if (!product) {
            res.status(400).json({ message: "no Product" })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
}