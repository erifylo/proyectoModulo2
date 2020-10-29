const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  let userLogged = req.session.currentUser !==undefined;
  res.render('index', {"isUserLoggedIn": userLogged,  layout: 'layoutNotLoggedIn.hbs' });
});


module.exports = router;

