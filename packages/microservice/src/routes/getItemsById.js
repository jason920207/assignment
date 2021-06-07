'use strict';
const _ = require('lodash');
const mockDBCalls = require('../database/index.js');
const validation = require('../utils/validation')

const getItemsByIdHandler = async (request, response) => {
    const stringOfItemIds = request.query.ids || '';
    const listOfItemIds = stringOfItemIds !== '' ? stringOfItemIds.split(',') : [];
    if (!validation.productIdValidation(stringOfItemIds)) {
        return response.status(400).send({ errorMsg: 'Id is invalid' });
    }

    const data = await mockDBCalls.getItemsById(listOfItemIds);
    // returned data is always stringified for this endpoint
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/items', getItemsByIdHandler);
};
