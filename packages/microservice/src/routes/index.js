'use strict';

module.exports = (app) => {
    require('./healthCheck.js')(app);
    require('./getItemsById.js')(app);
    require('./getRecommendedItemsForUser.js')(app);
};
