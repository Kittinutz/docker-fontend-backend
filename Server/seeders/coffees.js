'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Cofees',Cofees, {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Cofees', null, {})
	}
}

const Cofees = [
	{itemName:'Latte', price: 80.00, createdAt:'2018-12-31 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName:'expresso', price: 60.00, createdAt:'2018-12-12 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName:'chocolate hot', price: 80.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Orage Juice', price: 80.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Hot Green tea milk ', price: 80.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Cappucino', price: 80.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Mocca', price: 90.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
]