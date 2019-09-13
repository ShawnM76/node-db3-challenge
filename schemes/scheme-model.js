const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id });
}

function findSteps(id) {
  return db('schemes as s')
    .innerJoin('steps as stp', 's.id', 'stp.scheme_id')
    .select('s.scheme_name', 'stp.step_number', 'stp.instructions')
    .where({ scheme_id: id })
    .orderBy('stp.step_number')
    .then(steps => {
      return steps;
    });
}

function add(scheme) {}

function addStep() {}

function update() {}

function remove() {}
