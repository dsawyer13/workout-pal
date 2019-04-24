'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/workoutPalDev';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/workout-pal-test';
exports.PORT = process.env.PORT || 8080;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';
exports.MONGODB_URI = process.env.MONGODB_URI || 'mongolab-round-33155';
