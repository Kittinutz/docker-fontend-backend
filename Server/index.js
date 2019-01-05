import express from 'express'
const app = express()


app.listen(5000, () => {
	console.log('Server listent on port : 5000')
})

app.get('/hello', (req, res) => {
	res.send('helloworld')
})

app.get('/hell', (req, res) => {
	res.send('helle')
})