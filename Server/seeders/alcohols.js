'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Alcohols',Alcohols, {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Alcohols', null, {})
	}
}

const Alcohols = [
	{itemName:'Singha', price: 60.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Spy red', price: 60.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Spy Original', price: 60.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Change', price: 60.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Leo', price: 60.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
	{itemName: 'Singha', price: 60.00, quetity: 99.00, createdAt:'2018-12-13 00:00:00',updatedAt: '2018-12-13 00:00:00'},
]