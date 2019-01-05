import express from 'express'
import { Router } from 'express'
import { SoftDrinks, Foods ,Coffes, Beers } from './model/provider.js'
import Routers from './routes/index'
const app = express()
const router = Router()
app.listen(5000, () => {
	console.log('Server listent on port : 5000')
})

app.use('/api',Routers(router))


app.get('/test', (req, res) => {
	res.send('server is compile')
})