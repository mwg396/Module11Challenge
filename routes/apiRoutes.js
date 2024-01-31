const router = require('express').Router();
const database = require('../db/db.json');
const fs = require('fs');




module.exports = function (app) {
	app.post('/api/notes', function (req, res) {
		console.log(req.body);


        db.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
			if (err) throw err;
            res.json(database);
		});


    app.get('/api/notes', function (req, res) {
		res.json(database);
	});


    app.delete('/api/notes', (req, res) => {

      
          notes.splice(noteIndex, 1);
      
          fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(database), function (err) {
            if (err) throw err;
              return res.json(database);
            });
    
          });
        });
      };
