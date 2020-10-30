
const express = require('express');
const router  = express.Router();

//const bcrypt  = require("bcrypt");
//const User = require('../models/modelUser');
const Event = require('../models/modelEvent');
//const saltRounds = 10; 
//const salt  = bcrypt.genSaltSync(saltRounds);



router.get ('/allEvents', (req, res, next)=>{
  const event = {
    "title":       req.query.title,
    "city":        req.query.city,
    "date":        req.query.date,
    "type":        req.query.type,
    "description": req.query.description,
    "limit" :      req.query.limit
  }

Event.find({'type': event.type})
    .then(eventsList => {
      res.render('allEvents', {eventsList});
    })
    .catch(error => {
      console.log('Error while retrieving events details:', error);
    }); 
});



module.exports = router;