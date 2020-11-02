const express = require('express');
const router  = express.Router();
const Event = require('../models/modelEvent');
const Attendee = require('../models/modelAttendees');


 router.get('/allEvents/:id', async(req,res,next)=>{
  let eventsListDos = await Event.findById(req.params.id);
  /* LISTA PAX - HAY QUE HACERLO CON POPULATE!!! */
      


  res.render('detailEvent', eventsListDos);
});


 router.post("/allEvents", (req, res, next) => {
    
  const attendanceInfo = {
    eventId: req.body.eventId,
    userId: req.session.currentUser._id,
  };


  const theAttendance = new Attendee(attendanceInfo);

  Attendee.findOne({'userId' : req.session.currentUser._id }).then(user => {
    
    if (user !== null) {
      res.render('detailEvent', {errorMessage : "already registered!"})
      return ;
    }
    theAttendance.save((err) => {
      if (err) {
         next(err);
         return;
       }
       res.redirect('/');
     });
  })
  
 
}); 
 

module.exports = router;
