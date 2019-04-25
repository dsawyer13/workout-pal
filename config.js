'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/workoutPalDev';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/workout-pal-test';
exports.PORT = process.env.PORT || 3001;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';
