const express = require('express');
const router = express.Router();

const nodeController = require('../../modules/nodes/nodeController');

router.post('/register', nodeController.saveUser);
router.get('/:username', nodeController.getUser);
router.put('/:username', nodeController.putUser);
router.delete('/:username', nodeController.deleteUser);

module.exports = router;
