module.exports = {
    dialect: 'postgres',
    host: 'pkteam-pgsql',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}
