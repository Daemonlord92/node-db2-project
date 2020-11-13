const knex = require('knex');
const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    findByMake,
    insert,
    update,
    remove,

};

function find() {
    return db('cars');
}

function findById(id) {
    return db('cars').where({ id: Number(id) });
}

function findByMake(make) {
    return db('cars').where({make: String(Make)})
}

function insert(post) {
    return db('cars')
        .insert(post, 'id')
        .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
    return db('cars')
        .where('id', Number(id))
        .update(post);
}

function remove(id) {
    return db('cars')
        .where('id', Number(id))
        .del();
}
