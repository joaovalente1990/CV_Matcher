const CV = require('../models/cv');
const cvsService = require('../services/CvsService');

exports.getCVSByUser = (req, res, next) => {
    cvsService.getCVSByUser(req, res, next);
};