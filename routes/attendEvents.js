const express = require('express');
const router  = express.Router();
const Event = require('../models/modelEvent');
const Attendee = require('../models/modelAttendees');

router.get('/attendEvents', (req, res, next)=>{
  Attendee.find({"userId":req.session.currentUser._id}).populate('eventId').exec((err, events)=>{
    res.render('attendEvents', {events});
  })
  
})

router.post('/notAttendEvents', (req, res, next)=>{
  Attendee.deleteOne({$and:[{"userId":req.session.currentUser._id},{"eventId": req.body.id}]}).then(ele =>{
     res.redirect("/attendEvents");
    });
});


module.exports = router;