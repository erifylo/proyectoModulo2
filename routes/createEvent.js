const express = require('express');
const router  = express.Router();
const Event=require ('../models/modelEvent');

router.get('/createEvents', (req, res, next) => {
  res.render('createEvents');
});

router.post ('/createEvents', (req, res, next)=>{
  const event = {
    "title":       req.body.title,
    "city":        req.body.city,
    "date":        req.body.date,
    "type":        req.body.type,
    "description": req.body.description,
    "limit" :      req.body.limit
  }

  if(event.title===""|| event.city==="" || event.date===""|| event.type==="" ||event.description===""){
    res.render('createEvents', {errorMessage: "there are empty fields, please correct them"})
    return;
  }
  let today=new Date();
  let modelDate= Date.parse(event.date)
  if(modelDate<today){
    res.render('createEvents', {errorMessage: "the event date can't be earlier than the current date"})
    return;
  }
  Event.create(event).then(ele=>{
    res.redirect("/myEventsCreated");
  });
})
module.exports = router;