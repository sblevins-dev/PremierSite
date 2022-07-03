const Phones = require('../models/phoneModel')

const getPhones = async (req, res) => {
    const phones = await Phones.find()

    res.status(200).json(phones)
}

module.exports = {
    getPhones,
}