const express = require('express');

const VenueControl = require('../controllers/venue-control');

const router = express.Router();

router.post('/venue', VenueControl.createVenue);
router.put('/venue/:id', VenueControl.updateVenue);
router.delete('/venue/:id', VenueControl.deleteVenue);
router.get('/venues', VenueControl.getVenues);

module.exports = router;
