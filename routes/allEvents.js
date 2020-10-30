
const express = require('express');
const router  = express.Router();


const Event = require('../models/modelEvent');

router.get('/allEvents', (req, res, next) => {

  const typeEvent = req.query.type;
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