const express = require('express');
const router  = express.Router();

const bcrypt  = require("bcrypt");
const User = require('../models/modelUser');
const saltRounds = 10; 
const salt  = bcrypt.genSaltSync(saltRounds);


//Renderización

router.get('/signup', (req, res, next) => {
  res.render('auth/signUp');
});

router.get('/login', (req, res, next) => {
  res.render('auth/login');
});

router.get('/logout', (req, res, next) => {
  req.session.destroy((el)=>{
    res.redirect("/");
  })
  
});

//Llamada a la base de datos

router.post('/signup', (req, res, next)=>{
  const nickName = req.body.nickname;
  const email = req.body.email;
  const password= req.body.password;

  //checks signup

  if(nickName===""|| email==="" || password===""){
    res.render('/auth/signup', {errorMessage: "there are empty fields, please correct them"})
    return;
  }

  User.findOne({"nickName":nickName}).then(user=>{
    if(user!==null){
      res.render('/auth/sign',{errorMessage:"the user already exists"})
      return;
    }
    User.findOne({"email":email}).then(user=>{
      if(email!==null){
        res.render('/auth/sign',{errorMessage:"This email is already registered, please use another"})
      }
      return;
    });    
  });
  const hashPassword = bcrypt.hashSync(password, salt);
  
  //Creamos el usuario en la base de datos

  User.create({
    "nickname": nickName,
    "email": email,
    "password": hashPassword
  }).then(ele=>{
    res.redirect("/");
  });

});


router.post('/login', (req, res, next)=>{
  const user = req.body.user;  
  const password= req.body.password;
 
  //checks login

  if(user===""|| password===""){
    res.render('auth/login',{errorMessage: "the user or the password are empty!"});
    return;
  }
  User.findOne ({$or:[{"nickName":nickName}, {"email":email}]}).then(user=>{
    if(user===null){
      res.render('auth/login', {errorMessage:"The user doesn't exist!"});
      return;
    }
  })
  .catch(error => {
    next(error);
  })
  if(bcrypt.compareSync(password,user.password)){
    req.session.currentUser=user;
    res.redirect ("/");
  }
  else{
    res.render('auth/login',{errorMessage: "the password is not correct!"});
  }
  })

module.exports = router;