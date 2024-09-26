const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecolink_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados MySQL'))
    .catch(err => console.error('Erro ao conectar ao banco de dados', err));

module.exports = sequelize;
