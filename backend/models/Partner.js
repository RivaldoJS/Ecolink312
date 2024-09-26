const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Partner = sequelize.define('Partner', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Partner;
