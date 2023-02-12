const express = require('express');
const app = express();

const mongoose = require('mongoose');

// "basiccrud" will be our database
const mongoURI = 'mongodb://127.0.0.1:27017/basiccrud';

const db = mongoose.connection;

mongoose.connect(
	mongoURI,
	{
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('database connection checked');
	}
);

db.on('error', (err) => {
	console.log('ERROR: ', err.message);
});
db.on('connected', (err) => {
	console.log('mongo connected');
});
db.on('disconnected', (err) => {
	console.log('mongo disconnected');
});

app.listen(3000, () => {
	console.log('Server listening');
});

app.get('/herbs/new', (req, res) => {
	res.send('received');
});

app.get('/herbs/new', (req, res) => {
	res.render('new.ejs');
});

app.post('/herbs', (req, res) => {
	res.send('received');
});

app.use(express.urlencoded({ extended: true }));

app.post('/herbs', (req, res) => {
	res.send(req.body);
});

app.post('/herbs/', (req, res) => {
	if (req.body.isEdible === 'on') {
		//if checked, req.body.readyToEat is set to 'on'
		req.body.isEdible = true;
	} else {
		//if not checked, req.body.readyToEat is undefined
		req.body.isEdible = false;
	}
	res.send(req.body);
});

const Herbs = require('./models/herbs.js');

app.post('/herbs/', (req, res) => {
	if (req.body.isEdible === 'on') {
		//if checked, req.body.readyToEat is set to 'on'
		req.body.isEdible = true;
	} else {
		//if not checked, req.body.readyToEat is undefined
		req.body.isEdible = false;
	}

	Herbs.create(req.body, (error, createdHerbs) => {
		if (error) {
			console.log(error);
			res.send(error);
		} else {
			res.send(createdHerbs);
		}
	});
});

app.get('/herbs', (req, res) => {
	res.send('index');
});

app.get('/herbs', (req, res) => {
	res.render('index.ejs');
});

app.get('/herbs', (req, res) => {
	Herbs.find({}, (error, allHerbs) => {
		res.render('index.ejs', {
			herbs: allHerbs,
		});
	});
});

Herbs.create(req.body, (error, createdHerbs) => {
	res.redirect('/herbs');
});

app.get('/herbs/:id', (req, res) => {
	Herbs.findById(req.params.id, (err, foundHerbs) => {
		res.send(foundHerbs);
	});
});

app.get('/herbs/:id', (req, res) => {
	Herbs.findById(req.params.id, (err, foundHerbs) => {
		res.render('show.ejs', {
			herbs: foundHerbs,
		});
	});
});
