const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body;
    const sum = Number(numWeeks) * Number(weeklyRevenue);
    if(!numWeeks || !weeklyRevenue || sum < 1000000 || isNaN(sum)) {
        res.status(400).send()
    }
    else {
        next()
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
