
import { SoftDrinks, Foods ,Coffes, Beers } from '../model/provider'


export const getMenus = async (req,res) => {
  const softdrinks = await SoftDrinks.findAll()
	const foods = await Foods.findAll()
	const coffes = await Coffes.findAll()
	const beers = await Beers.findAll()
	const menus = {
		softdrinks,
		foods,
		coffes,
		beers,
	}
return	res.send(JSON.stringify(menus))
}