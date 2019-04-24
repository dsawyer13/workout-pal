'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const {app, runServer, closeServer} = require('../server');
const { Workout } = require('../workouts/models.js');
const { TEST_DATABASE_URL } = require('../config')

const should = chai.should();
chai.use(chaiHttp);

function tearDownDb() {
  return new Promise((resolve, reject) => {
    console.warn('Deleting Database');
    mongoose.connection.dropDatabase()
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
}

function seedWorkoutData() {
  console.info('seeding workout data');
  const seedData = [];
    seedData.push({
      date: faker.date.past(),
      exercises: [
        {
          name: faker.lorem.word(),
          weight: faker.random.number(),
          sets: faker.random.number(),
          reps: faker.random.number()
        }
      ]
    });

  return Workout.insertMany(seedData);
}

describe('WorkoutPal API resource', function() {

  before(function() {
    return runServer(TEST_DATABASE_URL);
  });

  beforeEach(function() {
    return seedWorkoutData();
  })

  afterEach(function() {
    return tearDownDb();
  });

  after(function() {
    return closeServer();
  });
  describe('GET endpoint', function() {

    it('should return all workouts', function() {
      let res;
      return Workout
        .findOne()
        .then(gift => {
          return chai.request(app)
            .get(`/api/workouts`)
        })
        .then(_res => {
          res = _res;
          res.should.have.status(200);
          res.body.should.have.lengthOf.at.least(1);
        })
    });

    it('should return workouts with correct fields', function() {
      let resWorkout;
      return Workout
        .findOne()
        .then(workout => {
          // console.log(workout);
          return chai.request(app)
            .get('/api/workouts')
        })
        .then(function(res) {

          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.should.have.lengthOf.at.least(1);
          res.body.forEach(function(workout) {
            workout.should.be.a('object');
            workout.should.include.keys('id', 'date', 'finished', 'exercises');
          });
        });
      });
    });

    describe('POST endpoint', function() {

      it('should add a new workout', function() {

        const newWorkout = {
          exercises: [{
              name: faker.lorem.word(),
              weight: faker.random.number(),
              sets: faker.random.number(),
              reps: faker.random.number()
            }]
        };
        return Workout
          .findOne()
          .then(workout => {
            return chai.request(app)
              .post('/api/workouts/')
              .send(newWorkout)
          })
          .then(function(res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.include.keys(
              'id', 'date', 'finished', 'exercises');
            res.body.id.should.not.be.null;
            res.body.exercises[0].reps.should.equal(newWorkout.exercises[0].reps);
            res.body.exercises[0].name.should.equal(newWorkout.exercises[0].name);
            res.body.exercises[0].sets.should.equal(newWorkout.exercises[0].sets);
            res.body.exercises[0].weight.should.equal(newWorkout.exercises[0].weight);
          });
      });
    });

    describe('PUT endpoint', function() {

      it('should add exercises sent over', function() {
        const newData = {
          exercises: {
            name: faker.lorem.word(),
            weight: faker.random.number(),
            sets: faker.random.number(),
            reps: faker.random.number()
          }
        };

        return Workout
          .findOne()
          .then(workout => {
            return chai.request(app)
              .put(`/api/workouts/${workout.id}`)
              .send(newData);
          })
          .then(res => {
            res.should.have.status(204);
            return Workout.findOne()
          })
          .then(workout => {
            workout.exercises[1].name.should.equal(newData.exercises.name);
            workout.exercises[1].weight.should.equal(newData.exercises.weight);
            workout.exercises[1].sets.should.equal(newData.exercises.sets);
            workout.exercises[1].reps.should.equal(newData.exercises.reps);
          });
      });
    });

    describe('DELETE endpoint', function() {

      it('should delete a workout by id', function() {
        let workout;

        return Workout
          .findOne()
          .then(_workout => {
            workout = _workout;
            return chai.request(app)
              .delete(`/api/workouts/${workout.id}`);
          })
          .then(res => {
            res.should.have.status(204);
            return Workout.findById(workout.id)
          })
          .then(_workout => {
            should.not.exist(_workout);
          });
      });
    });

    describe('exercise PUT endpoint', function() {

      it('should update exercise fields', function() {
        const newFields = {
          name: faker.lorem.word(),
          weight: faker.random.number(),
          sets: faker.random.number(),
          reps: faker.random.number()
        }

        return Workout
          .findOne()
          .then(workout => {
          newFields.id = workout.exercises[0].id;
          return chai.request(app)
            .put(`/api/workouts/${workout.id}/${workout.exercises[0].id}`)
            .send(newFields);
        })
        .then(res => {
          res.should.have.status(204);
          return Workout.findOne()
        })
        .then(workout => {
          console.log(workout)
          workout.exercises[0].name.should.equal(newFields.name);
          workout.exercises[0].weight.should.equal(newFields.weight);
          workout.exercises[0].sets.should.equal(newFields.sets);
          workout.exercises[0].reps.should.equal(newFields.reps);
        });
      });
    });

    describe('exersise DELETE endpoint', function() {

      let workout;

      it('should delete exercises by id', function() {
        return Workout
          .findOne()
          .then(_workout => {
            workout = _workout;
            return chai.request(app)
              .delete(`/api/workouts/${workout.exercises[0].id}`);
          })
          .then(res => {
            res.should.have.status(204);
            return Workout.findById(workout.exercises[0].id);
          })
          .then(exercise => {
            should.not.exist(exercise);
          })
      })
    })
});
