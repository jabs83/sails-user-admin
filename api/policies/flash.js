module.exports = function(req, res, next) {
	res.local.flash = {};

	if (!req.session.flash) return next();

  	res.locals.flash = _.clone(req.session.flash);

    //rest the flash object to empty
    req.session.flash = {};

    next();
};