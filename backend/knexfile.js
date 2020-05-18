module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite3'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true,
  
};