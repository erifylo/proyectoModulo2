
const express = require('express');
const router  = express.Router();

//const bcrypt  = require("bcrypt");
//const User = require('../models/modelUser');
const Event = require('../models/modelEvent');
//const saltRounds = 10; 
//const salt  = bcrypt.genSaltSync(saltRounds);



router.get('/allEvents', (req, res, next) => {

  const typeEvent = req.query.filterType;
  /* const dateEvent = req.query.date;
  const cityEvent = req.query.city; */

  //console.log(typeEvent);

Event.find({'type': typeEvent})
    .then(eventsList => {
      console.log(eventsList)
      res.render('allEvents', {eventsList});
    })
    .catch(error => {
      console.log('Error while retrieving events details:', error);
    }); 
});



module.exports = router;