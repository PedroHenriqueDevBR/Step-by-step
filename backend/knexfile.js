module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite3'
  },
  migrations: {
    directory: './migrations'
  },
  useNullAsDefault: true,
};