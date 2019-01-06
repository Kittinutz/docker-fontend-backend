import 'babel-polyfill'
import express from 'express'
import {matchRoutes} from 'react-router-config'
import Routes from './client/routes'
import renderer from './helpers/renderer'
import Proxy from 'express-http-proxy'
import createStore from './helpers/createStore'
import Loadable from 'react-loadable'

const app = express()

app.use(express.static('public')) //ทุกpath ที่เข้ามาจะทำเสมอ
app.use('/api',Proxy('http://react-ssr-api.herokuapp.com',{
	proxyReqOptDecorator(opts){
		opts.headers['x-forwarded-host'] ='localhost:3000'
		return opts
	}
}))
app.get('*', (req, res) => {
	const store = createStore(req)

	const promises = matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData ? route.loadData(store) : null
	}).map(promise=>{
		if(promise){
			return new Promise((resolve,reject)=>{
				promise.then(resolve).catch(resolve)
			})
		}
	})

	Promise.all(promises).then(()=>{
		const context = {}
		const content = renderer(req,store,context)
		if(context.url){
			return res.redirect(301,context.url)
		}
		if(context.notFound){
			res.status(404)
		}
		res.send(content)
	})
		.catch(()=>{
			res.send('Something went wrong')
		})
	// not recommanded
  
})
Loadable.preloadAll().then(() => {
	app.listen(3000, () => {
		console.log('listen server side render  on port 3000')
	})
})
