var app = require('express')();


const about = (req, res) => {
	res.send('bout')
}

const user = (req, res) => {
	res.send(` Hello ${req.paramas.name}`)
}


app.get("/", (req, res) => {
	res.send("hello jenkins");
})

app.get('/about', about)
app.get('/user/:name', user)
app.listen(3000, () => { 
	console.log('listening at 3000');
});


module.exports = app;