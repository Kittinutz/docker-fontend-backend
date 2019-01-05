'use strict'
module.exports = (sequelize, DataTypes) => {
	const Foods = sequelize.define('Foods', {
		itemName: DataTypes.STRING,
		price: DataTypes.INTEGER
	}, {})
	Foods.associate = function(models) {
		// associations can be defined here
	}
	return Foods
}