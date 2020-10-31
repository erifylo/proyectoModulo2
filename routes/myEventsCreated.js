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
router.get('/modifyEvents/:id',(req,res,next)=>{
  const id = req.params.id;
  Event.findOne({"_id":id}).then(obj=>{
    res.render('modifyEvents',obj)

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