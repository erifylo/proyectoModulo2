const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  let userLogged = req.session.currentUser !==undefined;
  if(userLogged){
    res.render('dashboard',  req.session.currentUser)
  }
  else{
    res.render('index', { layout: 'layoutNotLoggedIn.hbs' });

  }
 
 
});



module.exports = router;

