const express = require('express');
const router  = express.Router();
const Event=require ('../models/modelEvent');

//enseña todos los eventos creados por el usuario
router.get('/myEventsCreated', (req, res, next) => {
  Event.find({"creator":req.session.currentUser._id}).then(events=>{
    res.render('myEventsCreated',{events});

  })
});

//modificar evento
router.get('/modifyEvents/:eventId',(req,res,next)=>{
  const id = req.params.eventId;  
  Event.findOne({"_id":id}).then(obj=>{
    const date = (JSON.stringify(obj.date).slice(1,11))
    const event = {
      "_id": obj._id,
      "title": obj.title,
      "city": obj.city,
      "date": date,
      "type": obj.type,
      "description": obj.description,
      "creator": obj.creator,
      "created_at": obj.created_at,
      "updated_at": obj.updated_at
    }
    console.log(event)
    res.render('modifyEvents',event)

  })
  
})


router.post('/modifyEvents', (req, res, next)=>{
  const event = {
    "title":       req.body.title,
    "city":        req.body.city,
    "date":        req.body.date,
    "type":        req.body.type,
    "description": req.body.description,
    "limit" :      req.body.limit,
  }
  
  Event.findByIdAndUpdate({"_id":req.body.id},event).then(el=>{
    res.redirect('/myEventsCreated')
  })

})


    
//eliminar evento
router.post('/delete', (req, res, next)=>{
  Event.deleteOne({"_id":req.body.id})
  .then(el=>{
    res.redirect('/myEventsCreated')
  })
})

module.exports = router;