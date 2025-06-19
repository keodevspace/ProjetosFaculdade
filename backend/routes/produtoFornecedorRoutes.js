const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoFornecedorController');

router.get('/', controller.getAssociations);
router.post('/', controller.associate);

module.exports = router;
