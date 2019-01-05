export default (sequelize, DataTypes) => {
	const coffes = sequelize.define('coffes', {
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
		createdAt: {
			field: 'created_at',
			type: DataTypes.DATE,
		},
		updatedAt: {
			field: 'updated_at',
			type: DataTypes.DATE,
		},
	})

	return coffes
}