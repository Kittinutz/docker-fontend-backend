import express from 'express'
import { Menus } from './model/provider'
const app = express()

/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

app.listen(5000, () => {
	console.log('Server listent on port : 5000')
})

app.get('/hello', (req, res) => {
	Menus.findAll().then(respons => {
		res.send('helloworld:', respons)
	})
})

app.get('/hell', (req, res) => {
	res.send('helle')
})