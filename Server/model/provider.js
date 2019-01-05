import Sequelize from 'sequelize'
import sequelize from '../databbase'

import MenusModal from '../model/menus'
import SoftDrinkModal from './softdrinks'
import BeersModal from '../model/beers'
import CoffeModal from '../model/coffes'
/* relation ship */

const Menus = MenusModal(sequelize, Sequelize)
const SoftDrinks = SoftDrinkModal(sequelize, Sequelize)
const Coffes = CoffeModal(sequelize, Sequelize)
const Beers = BeersModal(sequelize, Sequelize)

export default {
	Menus,
	SoftDrinks,
	Coffes,
	Beers
}