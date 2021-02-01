var app = require('express')();


const about = (req, res) => {
res.send('bout')
}

app.get("/", (req, res) => {
	res.send("hello jenkins");
})

app.get('/about', about)

app.listen(3000, () => { 
	console.log('listening at 3000');
});


module.exports = app;