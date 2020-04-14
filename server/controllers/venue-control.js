const Venue = require('../models/venue-model');

createVenue = (req, res) => {
    const body = req.body;
    console.log("res", res);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a venue',
        });
    }

    const venue = new Venue(body);
    console.log("venue", venue);
    if (!venue) {
      return res.status(400).json({ success: false, error: err })
    }

    venue
        .save()
        .then(() => res.status(201).json({
                success: true,
                id: venue._id,
                message: 'Venue created!',
              }))
        .catch(error => res.status(400).json({
                error,
                message: 'Venue not created!',
            }))
};

updateVenue = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Venue.findOne({ _id: req.params.id }, (err, venue) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Venue not found!',
            })
        }
        venue._id = body._id;
        venue.name = body.name;
        venue.description = body.description;
        venue.telephone = body.telephone;
        venue.priceRating = body.priceRating;
        venue.coords = body.coords;

        venue
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: venue._id,
                    message: 'Venue updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Venue not updated!',
                })
            })
    })
}

deleteVenue = async (req, res) => {
    await Venue.findOneAndDelete({ _id: req.params.id }, (err, venue) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!venue) {
            return res
                .status(404)
                .json({ success: false, error: `Venue not found` })
        }

        return res.status(200).json({ success: true, data: venue })
    }).catch(err => console.log(err))
}

getVenues = async (req, res) => {
    await Venue.find({}, (err, venues) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!venues.length) {
            return res
                .status(404)
                .json({ success: false, error: `Venue not found` })
        }
        return res.status(200).json({ success: true, data: venues })
    }).catch(err => console.log(err))
}

module.exports = {
    createVenue,
    updateVenue,
    deleteVenue,
    getVenues
}
