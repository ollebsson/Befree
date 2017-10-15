var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var router = express.Router();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', router);

router.post('/contact', sendEmail);
router.post('/signUp', sendContactRequest);

function sendEmail(req, res) {

	var text = req.body.user_text;
	var transporter = nodeMailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'befreeemailservice@gmail.com',
			pass: '********'
		}
	});
	
	var mailOptions = {
		from: 'befreeemailservice@gmail.com',
		to: 'marta@martafree.se',
		subject: 'Contact request',
		html:  '<a href="mailto:' + req.body.user_email + '">' + req.body.user_email + '</a>' + '<p>' + text + '</p>'
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.send(500);
	    }
	    else{
	        console.log('Message sent: ' + info.response);
	        res.send(200);
	    };
	})
}

function sendContactRequest(req, res) {

	var text = req.body.user_text;
	var transporter = nodeMailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'befreeemailservice@gmail.com',
			pass: 'Jd6210Jd6800'
		}
	});
	//
	var mailOptions = {
		from: 'befreeemailservice@gmail.com',
		to: 'marta@martafree.se',
		subject: 'Newsletter subscription request',
		html:  '<a href="mailto:' + req.body.user_email + '">' + req.body.user_email + '</a>'
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({error: 'error'});
	    }
	    else{
	        res.json({yo: info.response});
	    };
	})
}

// var handlebars = require('express3-handlebars');
// .create({ defaultLayout:'main' });

// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');




app.get('/', function (req, res) {

	res.sendFile(__dirname + "/index.html");
});


var server = app.listen(8000, function () {
	console.log('Server started. Listening to connections on port 8000\n');
});

module.exports = app;

