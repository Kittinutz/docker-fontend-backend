'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('SoftDrinks',SoftDrink, {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('SoftDrinks', null, {})
	}
}

const SoftDrink = [
	{itemName:'water', price: 20.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName:'Red Fanta', price: 30.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName:'Green Fanta', price: 30.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Spite', price: 30.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Orage Fanta', price: 30.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Lipton ice tea', price: 30.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Coke zero', price: 30.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Coke original', price: 30.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Coconut', price: 50.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
]