
const express = require('express');
const router  = express.Router();


const Event = require('../models/modelEvent');




router.get ('/allEvents', (req, res, next)=>{
  const event = {
    "title":       req.query.title,
    "city":        req.query.city,
    "date":        req.query.date,
    "type":        req.query.type,
    "description": req.query.description,
    "limit" :      req.query.limit
  }


 Event.find({ $and: [ { 'type': event.type }, { 'date': event.date }, { 'city': event.city }  ] } )

    .then(eventsList => {
      res.render('allEvents', {eventsList});
    })
    .catch(error => {
      console.log('Error while retrieving events details:', error);
    });  

     
});



module.exports = router;