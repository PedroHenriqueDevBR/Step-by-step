// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'stepbystep',
      user:     'postgres',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
