const express = require('express');
const router = express.Router();
const controllers = require('../controllers/product');
const {authenticateUser} = require('../middlewares/auth');


router.post('/add', authenticateUser, controllers.addProduct);
router.get('/view', authenticateUser, controllers.viewProduct);
// router.post('/cart', controllers);

module.exports = router;