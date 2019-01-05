import { getMenus } from '../controller/Menucontroller'

const MenuRoutes = (router)=>{
	router
		.route('/menus')
		.get(getMenus)

	return router
}

export default MenuRoutes

