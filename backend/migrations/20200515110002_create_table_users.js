
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNUll()
        table.string('email').notNUll().unique()
        table.string('password').notNUll()
        table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
