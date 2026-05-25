module.exports.index = function(req, res){
    res.render('index', { title: 'Travlr Getaways' });
};

module.exports.travel = function(req, res){
    res.render('travel', { title: 'Travel' });
};