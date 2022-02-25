exports.seed = function(knex,) {
    return knex('users')
        .truncate()
        .then(function() {
    return knex('users').insert([
        { username: 'thechad', password: 'my1stpassword'},
        { username: 'brycetheprincess', password: 'brycexhunt4ever'},
        { username: 'jason', password: '100percentvillain'},
    ]);
    });
    }