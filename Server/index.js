import express from 'express'
import { SoftDrinks } from './model/provider.js'
const app = express()


app.listen(5000, () => {
	console.log('Server listent on port : 5000')
})

app.get('/hello', async (req, res) => {
	const softdrinks = await SoftDrinks.findAll()
	res.send(softdrinks)
})

app.get('/hell', (req, res) => {
	res.send('helle')
})