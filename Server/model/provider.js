import Sequelize from 'sequelize'
import sequelize from '../databbase'

import MenusModal from '../model/menus'
import SoftDrinkModal from './softdrinks'
import BeersModal from '../model/beers'
import CoffeModal from '../model/coffes'
/* relation ship */

export const Menus = MenusModal(sequelize, Sequelize)
export const SoftDrinks = SoftDrinkModal(sequelize, Sequelize)
export const Coffes = CoffeModal(sequelize, Sequelize)
export const Beers = BeersModal(sequelize, Sequelize)
