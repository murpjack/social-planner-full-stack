const express = require('express');

const entertainmentControllers = require('../controllers/entertainmentControllers');

const router = express.Router();

router.get('/entertainment/getVenues', entertainmentControllers.getActivities);
router.post('/entertainment/add', entertainmentControllers.createActivity);
router.put('/entertainment/update/:id', entertainmentControllers.updateActivity);
router.delete('/entertainment/remove/:id', entertainmentControllers.deleteActivity);

module.exports = router;
