'use strict';
/*
This file (db.js) represents an in-memory db in the form of a javascript object.

DO NOT MODIFY this file
*/

module.exports = {
    itemsById: {
        '0001': {
            id: '0001',
            name: 'Honeycrisp Apple',
            img: 'honeycrisp_apple.jpg',
            department: 'grocery',
            category: 'fresh produce',
            weight: '1g',
            price: 1.01,
        },
        '0002': {
            id: '0002',
            name: 'Anjou Pear',
            img: 'anjou_pear.jpg',
            department: 'grocery',
            category: 'fresh produce',
            weight: '2g',
            price: 2.02,
        },
        '0003': {
            id: '0003',
            name: 'Mens Bucket Hat',
            img: 'mens_bucket_hat.jpg',
            department: 'apparel',
            category: 'mens',
            weight: '3lbs',
            price: 50.05,
        },
        '0004': {
            id: '0004',
            name: 'Samsung TV',
            img: 'samsung_tv.jpg',
            department: 'electronics',
            category: 'tv and video',
            weight: '50lbs',
            price: 100.01,
        },
        '0005': {
            id: '0005',
            name: 'Puffy Chair',
            img: 'puffy_chair.jpg',
            department: 'home and furniture',
            category: 'furniture',
            weight: null,
            packagedWeight: '20lbs',
            price: 90.00,
        },
        '0006': {
            id: '0006',
            name: 'Sharp TV',
            img: 'sharp_tv.jpg',
            department: 'electronics',
            category: 'tv and video',
            weight: null,
            packagedWeight: '100lbs',
            price: 80.00,
        },
        '0007': {
            id: '0007',
            name: 'Apple Tv',
            img: 'apple_tv.jpg',
            department: 'electronics',
            category: 'tv and video',
            weight: '10lbs',
            price: 150.05,
        },
    },
    usersRecommendedItemsByUsername: {
        james: ['0001', '0002', '0003', '0004', '0005', '0006', '0007'],
        monica: ['0004', '0002', '0005'],
    }
};
