'use strict';
const _ = require('lodash');
const db = require('./db.js');

// DO NOT MODIFY this file

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (timeToResolveInMs, dataAccessMethod, listOfArgs) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod(...listOfArgs));
        }, timeToResolveInMs);
    });
};

// MOCK DB CALLS
//----------------
const getItemsById = (listOfItemIds) => {
    const dataAccessMethod = (arrayOfItemIds) => {
        const listOfItemsToReturn = [];
        _.forEach(arrayOfItemIds, (itemIdToRetrieve) => {
            if (_.includes(itemIdToRetrieve, '$')) {
                throw Error('db cannot handle this invalid itemId');
            }

            const valFromDb = db.itemsById[itemIdToRetrieve];

            if (!_.isEmpty(db.itemsById[itemIdToRetrieve])) {
                listOfItemsToReturn.push(valFromDb);
            }
        });

        return listOfItemsToReturn;
    };

    return mockDBCall(1000, dataAccessMethod, [ listOfItemIds ]);
};

const getRecommendedItemsForUser = (username) => {
    const dataAccessMethod = (username) => db.usersRecommendedItemsByUsername[username] || [];
    return mockDBCall(300, dataAccessMethod, [ username ]);
};

module.exports = {
    getItemsById,
    getRecommendedItemsForUser,
};
