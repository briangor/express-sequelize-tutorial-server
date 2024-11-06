module.exports = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DB,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

/*
`pool` is optional, it will be used for Sequelize connection pool config
    max: maximum number of connection in pool
    min: minimum
    acquire: max time, in ms, that pool will try to get connection before throwing error
    idle: max time, in ms, that a connection can be idle before being released

*/
