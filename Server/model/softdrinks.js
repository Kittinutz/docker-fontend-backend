export default (sequelize, DataTypes) => {
	const softDrinks = sequelize.define('softdrinks', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			autoIncrement: true,
			field: 'id',
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			field: 'name',
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			field: 'price',
		},
		quetity: {
			type: DataTypes.DECIMAL(10, 2),
			field: 'quetity',
		},
		createdAt: {
			field: 'created_at',
			type: DataTypes.DATE,
		},
		updatedAt: {
			field: 'updated_at',
			type: DataTypes.DATE,
		},
	})

	return softDrinks
}