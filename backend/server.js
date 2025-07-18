const express = require('express')
const cors = require('cors');
const connectDB = require('./config/db');
const authroutes = require('../backend/routes/authroutes')
const productroutes = require('../backend/routes/productroutes')
const app = express()

app.use(cors());
app.use(express.json());

connectDB()

app.use("/api/auth", authroutes)
app.use("/products", productroutes)

PORT = 5000;
app.listen(PORT, () => console.log(`Server is running at PORT :${PORT}`))