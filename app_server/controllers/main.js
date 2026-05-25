const trips = require('../../data/trips.json');

const homeList = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways',
        trips
    });
};

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel',
        trips
    });
};

module.exports = {
    homeList,
    travel
};
