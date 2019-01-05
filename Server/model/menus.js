export default (sequelize, DataTypes) => {
	const Foods = sequelize.define('Foods', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			autoIncrement: true,
			field: 'id',
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			field: 'itemName',
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			field: 'price',
		},
		createdAt: {
			field: 'createdAt',
			type: DataTypes.DATE,
		},
		updatedAt: {
			field: 'updatedAt',
			type: DataTypes.DATE,
		},
	})

	return Foods
}