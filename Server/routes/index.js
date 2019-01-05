import  MenuRoutes from './menuroutes'

const Router = (router) => {
	const allRoutes = [
		MenuRoutes(router),
	]
	return allRoutes.reduce((acc,curr)=>acc&&curr)
}
export default Router