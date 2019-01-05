'use strict'
module.exports = (sequelize, DataTypes) => {
	const SoftDrinks = sequelize.define('SoftDrinks', {
		itemName: DataTypes.STRING,
		price: DataTypes.INTEGER,
		quetity: DataTypes.INTEGER
	}, {})
	SoftDrinks.associate = function(models) {
		// associations can be defined here
	}
	return SoftDrinks
}