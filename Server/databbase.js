import Sequelize from 'sequelize'

const sequelize = new Sequelize('rabbitmansion', 'root', 'isylzjkoot', {
	host: 'mysql',
	dialect: 'mysql',
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
})


sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.')
})
	.catch((err) => {
		console.log('Unable to connect to the database:', err)
	})
sequelize.sync({ force: false })

export default sequelize