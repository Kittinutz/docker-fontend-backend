import express from 'express'
import {
	Menus,
	SoftDrinks,
	Coffes,
	Beers
} from './model/provider'
const app = express()


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