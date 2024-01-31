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
	});

    app.get('/api/notes', function (req, res) {
		res.json(database);
	});


    app.delete('/api/notes/:id', (req, res) => {
        const noteId = req.params.id; 

        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to delete note.' });
          }
      
          let notes = JSON.parse(database); 
          const noteIndex = notes.findIndex((database) => note.id === noteId);
      
          if (noteIndex === -1) {
            return res.status(404).json({ error: 'Note not found.' });
          }
      
          notes.splice(noteIndex, 1);
      
          fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(database), (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Failed to delete note.' });
            }
      
            res.json({ message: 'Note deleted successfully.' });
          });
        });
      })};