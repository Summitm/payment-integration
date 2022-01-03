const { Router } = require('express');

const router = Router();

const mpesaController = require('../controllers/mpesa');

// auth
router.get('/mpesa/auth', mpesaController.auth);

// c2b
router.get('/mpesa/c2b', mpesaController.c2b)

module.exports = router;