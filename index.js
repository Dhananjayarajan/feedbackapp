import express from 'express'
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const PORT = process.env.PORT || 1000
app.listen(PORT)