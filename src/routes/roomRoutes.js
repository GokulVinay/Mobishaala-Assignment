const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const auth = require('../middleware/auth');
router.use(auth);
router.post('/', roomController.createRoom);
router.get('/', roomController.getRooms);
router.post('/:roomId/token', roomController.generateToken);

module.exports = router; 