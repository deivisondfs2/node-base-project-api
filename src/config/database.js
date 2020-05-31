module.exports = {
  dialect: 'mssql',
  host: '172.17.0.1',
  port: '1433',
  username: 'SA',
  password: '<YourStrong@Passw0rd>',
  database: 'sqlCollection',
  dialectOptions: {
    options: {
      encrypt: true
    }
  },
  logging: false,
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
