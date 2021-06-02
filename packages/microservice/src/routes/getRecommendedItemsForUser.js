'use strict';
const mockDBCalls = require('../database/index.js');

const getRecommendedItemsForUserHandler = async (request, response) => {
    const data = await mockDBCalls.getRecommendedItemsForUser(request.query.username);

    // returned data is always stringified for this endpoint
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/users/recommendations', getRecommendedItemsForUserHandler);
};
