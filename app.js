var express = require('express');
var app = express();


var bodyParser = require('body-parser');
// var handlebars = require('express3-handlebars');
.create({ defaultLayout:'main' });

app.use(bodyParser.urlencoded({
	extended: true
}));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + "/public"));



app.get('/', function (req, res) {

		res.status(200);
		res.send('/index.html');
});


var server = app.listen(3000, function () {
	console.log('Server started. Listening to connections on port 3000\n');
});

module.exports = app;

