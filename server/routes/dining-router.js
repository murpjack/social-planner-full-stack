const express = require('express');

const diningControllers = require('../controllers/diningControllers');

const router = express.Router();

router.get('/dining/getVenues', diningControllers.getDiners);
router.post('/dining/add', diningControllers.createDiner);
router.put('/dining/update/:id', diningControllers.updateDiner);
router.delete('/dining/remove/:id', diningControllers.deleteDiner);

module.exports = router;
