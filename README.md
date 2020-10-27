# WIT - Women In Tech

## Description

Application made by women for women! The purpose of our application is to close the gender gap that exists in the tech industry, by helping women who work in the tech sector to network through events. Our main goal is to motivate more women to build businesses or to choose a career in the digital industry because we believe the future of tech is female :) 

## User Stories

- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup-

- **sign up** - As a user I want to sign up on the webpage so that I can see the whole content of the webpage

- **login** - As a user I want to be able to log in on the webpage so that I can see all the events that I could attend, create new ones and modify the ones that I have already created

- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account

- ** events list ** - As a user I want to see all the events available so that I can choose which ones I want to attend

- **events create** - As a user I want to create an event 

- **events detail** - As a user I want to see the event details and attendee list 

- **event attend** - As a user I want to be able to attend to event so that the organizers can count me in

## Backlog

List of other features outside of the MVPs scope

-	Job Portal: The user can post/search job offers

## ROUTES:


## Models

User model
 ```
  nickname: String,
  email: String,
  password: String
```
  


Event model

```
  title: String,
  description: String,
  date: Date,
  location: String,
  type: {type: String, enum: ['conference', 'meet up', 'courses', 'talks','other']},
  image: String,
  limit: Number,
  creator: Number,
```
## Links

### Trello

https://trello.com/b/QRslGGVn/women-in-tech

### Google Drive

https://docs.google.com/document/d/1CVqdtmQ45kMO30WnEd4hUs8AtKss50icntiMrz-WACM/edit?usp=sharing


### Git

The url to your repository and to your deployed project

[Repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)









