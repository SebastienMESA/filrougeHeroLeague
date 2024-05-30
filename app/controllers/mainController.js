const { heroDataMapper } = require("../models/heroDataMapper");
const { reviewDataMapper } = require("../models/reviewDataMapper");
const { serviceDataMapper } = require("../models/serviceDataMapper");

const mainController = { 
    async homepage(req, res) {
        const services = await serviceDataMapper.getAll();
        const heroes = await heroDataMapper.getAll();
        const reviews = await reviewDataMapper.getAll();

        res.render('index', { services, heroes, reviews });
    }
}

module.exports = mainController;