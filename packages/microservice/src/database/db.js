'use strict';
/*
This file (db.js) represents an in-memory db in the form of a javascript object.

DO NOT MODIFY this file
*/

module.exports = {
    itemsById: {
        '0001': {
            name: 'apple',
            department: 'grocery',
            category: 'fresh produce',
            weight: '1g',
            price: 1.01,
        },
        '0002': {
            name: 'pear',
            department: 'grocery',
            category: 'fresh produce',
            weight: '2g',
            price: 2.02,
        },
        '0003': {
            name: 'mens gucci hat',
            department: 'apparel',
            category: 'men',
            weight: '3lbs',
            price: 50.05,
        },
        '0004': {
            name: 'tv',
            department: 'electronics',
            category: 'tv and video',
            weight: '50lbs',
            price: 100.01,
        },
        '0005': {
            name: 'chair',
            department: 'home and furniture',
            category: 'furniture',
            weight: null,
            packagedWeight: '20lbs',
            price: 100.01,
        },
    },
    usersRecommendedItemsByUsername: {
        james: ['0001', '0002', '0003', '0004', '0005'],
        monica: ['0004', '0005'],
    }
};
