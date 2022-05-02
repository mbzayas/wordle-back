module.exports = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    setup: true,
    seederStorage: 'sequelize'
  },
  PORT: process.env.PORT,
  TOKEN: process.env.TOKEN
};
