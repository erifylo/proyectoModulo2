const express = require('express');
const router  = express.Router();
const Event = require('../models/modelEvent');
const Attendee = require('../models/modelAttendees');


 router.get('/allEvents/:id', async(req,res,next)=>{
  let eventsListDos = await Event.findById(req.params.id);
  /* LISTA PAX - HAY QUE HACERLO CON POPULATE!!! */
      


  res.render('detailEvent', {eventsListDos});
});


 router.post("/allEvents", (req, res, next) => {
  const attendanceInfo = {
    eventId: req.body.eventId,
    userId: req.session.currentUser._id,
    assistance: true,
  };

  const theAttendance = new Attendee(attendanceInfo);

  theAttendance.save((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/');
  });
}); 
 

module.exports = router;
