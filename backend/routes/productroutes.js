const express = require('express');
const { createPro, getPro } = require('../controllers/productcontroller');
const auth = require('../middilewares/authmiddileware')
const router = express.Router()

router.post("/create", auth, createPro)
router.get("/get", auth, getPro)

module.exports = router;