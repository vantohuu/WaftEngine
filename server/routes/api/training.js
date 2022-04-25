const express = require('express');
const router = express.Router();

const trainController = require('../../modules/train/trainController');

router.get('/hello', trainController.hello);
router.post('/sort', trainController.sort);
router.post('/addAB', trainController.saveadd);
router.post('/addArray', trainController.saveaddArray);


module.exports = router;
