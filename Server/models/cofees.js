'use strict'
module.exports = (sequelize, DataTypes) => {
	const Cofees = sequelize.define('Cofees', {
		itemName: DataTypes.STRING,
		price: DataTypes.INTEGER
	}, {})
	Cofees.associate = function(models) {
		// associations can be defined here
	}
	return Cofees
}