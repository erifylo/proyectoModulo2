
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

let condition = {
  $and: [ ]
}

if (event.type != "all") {
  condition.$and.push({"type" : event.type},)
} 

if (event.date != "") {
  condition.$and.push({"date" : event.date},)
}

if (event.city != "") {
  condition.$and.push({"city" : event.city})
}



 if (event.type == "all" && event.city == "" && event.date == "") {
  try {
    (async()=>{
      const eventsList = await Event.find();
      console.log(eventsList);
      res.render('allEvents', {eventsList});
    })();
  } catch (error) {
    console.log(error.message);
  }
}  else { 
  Event.find( condition )

  .then(eventsList => {
    res.render('allEvents', {eventsList});
  })
  .catch(error => {
    console.log('Error while retrieving events details:', error);
  });  
}
});





module.exports = router;