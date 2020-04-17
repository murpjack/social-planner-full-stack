const Diner = require('../models/dining-model');

createDiner = (req, res) => {
    const body = req.body;
    console.log("res", res);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a diner',
        });
    }

    const diner = new Diner(body);
    console.log("diner", diner);
    if (!diner) {
      return res.status(400).json({ success: false, error: err })
    }

    diner
        .save()
        .then(() => res.status(201).json({
                success: true,
                id: diner._id,
                message: 'Diner created!',
              }))
        .catch(error => res.status(400).json({
                error,
                message: 'Diner not created!',
            }))
};

updateDiner = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Diner.findOne({ _id: req.params.id }, (err, diner) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Diner not found!',
            })
        }
        diner._id = body._id;
        diner.name = body.name;
        diner.description = body.description;
        diner.telephone = body.telephone;
        diner.priceRating = body.priceRating;
        diner.coords = body.coords;

        diner
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: diner._id,
                    message: 'Diner updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Diner not updated!',
                })
            })
    })
}

deleteDiner = async (req, res) => {
    await Diner.findOneAndDelete({ _id: req.params.id }, (err, diner) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!diner) {
            return res
                .status(404)
                .json({ success: false, error: `Diner not found` })
        }

        return res.status(200).json({ success: true, data: diner })
    }).catch(err => console.log(err))
}

getDiners = async (req, res) => {
    await Diner.find({}, (err, diners) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!diners.length) {
            return res
                .status(404)
                .json({ success: false, error: `Diner not found` })
        }
        return res.status(200).json({ success: true, data: diners })
    }).catch(err => console.log(err))
}

module.exports = {
    createDiner,
    updateDiner,
    deleteDiner,
    getDiners
}
