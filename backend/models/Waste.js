const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Waste = sequelize.define('Waste', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    partnerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Waste;
