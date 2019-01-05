'use strict'
module.exports = (sequelize, DataTypes) => {
	const Alcohols = sequelize.define('Alcohols', {
		itemName: DataTypes.STRING,
		price: DataTypes.INTEGER,
		quetity: DataTypes.INTEGER
	}, {})
	Alcohols.associate = function(models) {
		// associations can be defined here
	}
	return Alcohols
}