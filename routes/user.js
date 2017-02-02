const mongoose = require('mongoose');
const User = require('../models/user');
const Org = require('../models/org');
const Course = require('../models/course');
const crypto = require('crypto');
const async = require('async');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const NotFoundError = require('../errorHandlers/notFoundError')
require('dotenv').config();

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement == currentElement ||
         (searchElement != searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}


const MAILER_OPTIONS = {
  auth: {
      api_key: process.env.SENDGRID_API
  }
}
//sample
const transport = nodemailer.createTransport(sgTransport(MAILER_OPTIONS));
const sendMailAsync = Promise.promisify(transport.sendMail).bind(transport);

module.exports = function(app, passport) {

  app.post('/signup', function(req, res, next) {
    const authenticator = passport.authenticate('local-signup', function(err, user, info) {
      if (err) {
        res.json(err)
        return next(err);
      }
      if (!user) {
        console.log("NO USER:", info)
        return res.status(404).json(info.message);
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({message: "Success! You are all signed up.", user: user});
      });
    });
    authenticator(req, res, next);
  });


  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      console.log('login post', info);
      if (err) { res.json(info); }
      if (!user) { return res.status(404).json(info.message);}
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({message: "Success! You are logged in.", user: user});
      });
    })(req, res, next);
  });


  app.get('/logout', function(req, res) {
     req.logout();
     res.redirect('/');
  });

  app.put('/editUser', function(req, res){
    if(req.user){
      User.findById(req.user._id, function(err, user){
        if(err){
          console.log(err)
        } else {
          user.local.email = req.body.email ? req.body.email : user.local.email;
          user.local.firstName = req.body.firstName ? req.body.firstName : user.local.firstName;
          user.local.lastName = req.body.lastName ? req.body.lastName : user.local.lastName;
          user.local.linkedIn = req.body.linkedIn ? req.body.linkedIn : user.local.linkedIn;
          user.local.twitterHandle = req.body.twitterHandle ? req.body.twitterHandle : user.local.twitterHandle;
          user.local.githubHandle = req.body.githubHandle ? req.body.githubHandle : user.local.githubHandle;
          user.local.skype = req.body.skype ? req.body.skype : user.local.skype;
          user.local.bio = req.body.bio ? req.body.bio : user.local.bio;

          user.orgs =

          user.save(function(err){
            if(err){
              res.json({message: "error updating user info"})
            } else {
              res.json(user)
            }
          })
        }
      })
    } else {
      res.json({user: "no user"})
    }
  });

  app.get('/getUser',function(req, res){
    if(req.user){
      User.findById(req.user._id)
      .populate('courses')
      .exec((err, user) => {
        if(err){
          console.log(err)
        } else {
          res.json(user)
        }
      })
    } else {
      res.json({user: null})
    }
  });


  app.get('/loadUser',function(req, res){
    Course.find()
    .exec((err, courses) => {
      if(err){
        res.json({ message: 'there was an error finding all courses' })
      } else {
        User.findById(req.user._id)
        .populate('courses')
        .exec((er, user) => {
          if(er){
            res.json({ message: 'there was an error getting the user' })
          } else {
            for (var i = 0; i < courses.length; i++) {
              const mappedUserCourses = user.courses.map((item) => {
                return item._id.toString();
              });
              if (mappedUserCourses.includes(courses[i]._id.toString())) {
                courses[i].enrolled = true;
              } else {
                courses[i].enrolled = false;
              }
            }
            user.courses = courses;
            res.json(user);
          }
        })
      }
    })
  });

  app.get('/editStudent/:student_id', function(req, res){
      User.findById(req.params.student_id)
      .populate('courses')
      .exec((err, user) => {
        if(err){
          console.log(err)
        } else {
          res.json(user)
        }
      })
  })

  app.put('/editStudent/:student_id', function(req, res){
      User.findById(req.params.student_id, function(err, user){
        if(err){
          console.log(err)
        } else {
          console.log("HELLLO", req.body.courses);
          req.body.courses ? user.courses.push(req.body.courses) : user.courses;

          user.save((er) => {
            if(er) {
              res.json(er);
            } else {
              res.json(user);
            }
          })

        }
      })
  })

  // app.get('/singleUser/:student_id', function(req, res){
  //     User.findById(req.params.student_id, function(err, user){
  //       if(err){
  //         console.log(err)
  //       } else {
  //         res.json(user)
  //       }
  //     })
  // })

app.get('/singleUser/:student_id',(req, res) => {
  Course.find()
  .exec((err, courses) => {
    if(err){
      res.json({ message: 'there was an error finding all courses' })
    } else {
      User.findById(req.params.student_id)
      .populate('courses')
      .exec((er, user) => {
        if(er){
          res.json({ message: 'there was an error getting the user' })
        } else {
          for (var i = 0; i < courses.length; i++) {
            const mappedUserCourses = user.courses.map((item) => {
              return item._id.toString();
            });
            if (mappedUserCourses.includes(courses[i]._id.toString())) {
              courses[i].enrolled = true;
            } else {
              courses[i].enrolled = false;
            }
          }
          user.courses = courses;
          res.json(user);
        }
      })
    }
  })
});

app.put('/editSingleUserCourses/:user_id/:course_id/:action', (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if(err) {
      res.json({ message: "couldnt find user" })
    } else {
      if(req.params.action === 'post'){
        user.courses.push(req.params.course_id);
        user.save((e, u) => {
          if(e) {
            res.json({mesage: "error adding course"})
          } else {
            res.json(u);
          }
        });
      } else {
        user.courses.remove(req.params.course_id);
        user.save((e, u) => {
          if(e) {
            res.json({mesage: "error adding fav"})
          } else {
            res.json(u);
          }
        });
      }
    }
  })
})

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


// org 5851c2d69d62a639c6fd9547
// user 583f70e9ac0a37d56fa69287
  app.put('/editUser/orgs/:org_id/:user_id', (req, res) => {
    User.findById(req.params.user_id, (err, user) => {
      if(err){
        console.log(err)
      } else {
        user.orgs.push(req.params.org_id);
        user.save((err, u) => {
          if(err){
            console.log(err)
          } else {
            Org.findById(req.params.org_id, (err, org) => {
              if(err){
                console.log(err)
              } else {
                org.members.push(u._id);
                org.save();
              }
            })
          }
        })
      }
    })
  });

  app.get('/getUsers', function(req, res){
    User.find(function(err, users){
      if(err){
        console.log("error loading users")
      } else {
        res.json(users)
      }
    })
  });


  app.get('/reset/:token', (req, res) => {
    findUserByToken(req.params.token)
    .then(() => res.redirect('/reset'))
  })

  app.post('/reset/:token', (req, res, next) => {
    let user;
    findUserByToken(req.params.token)
      .then( u => {
        user = u;
        user.local.password = user.generateHash(req.body.password);
        user.local.resetPasswordToken = undefined;
        user.local.resetPasswordExpires = undefined;
        return user.saveAsync()
      })
      .then( () => Promise.fromCallback(cb => req.logIn(user, cb)) )
      .then( () => sendPasswordConfirmationEmail(user) )
      .then( () => res.sendStatus(200) )
      .catch(next);
  })


   app.post('/forgot', function(req, res, next) {
     const email = req.body.email;
     let token;
     const host = process.env.NODE_ENV === 'production' ? 'www.coderange.org' : 'localhost:3000';
     generateCryptoBuffer()
       .then(t => {
         token = t;
         return findUserByEmail(email);
       })
       .then(user => savePasswordTokenToUser(user, token))
       .then(user => sendPasswordResetEmailToUser(user, token, host))
       .then(() => res.sendStatus(200))
       .catch(next);
   })
};


function findUserByToken(token) {
  return User.findOne({ 'local.resetPasswordToken': token, 'local.resetPasswordExpires': { $gt: Date.now() } })
    .then(user => {
      if(!user){
        throw new Error('Password reset token is invalid or has expired.', err)
      }
      return user
    })
}

function generateCryptoBuffer() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(20, (err, buf) => {
      if (err) {
        reject('Error generating crypto bytes', err);
      }
      resolve(buf.toString('hex'));
    });
  });
}

function findUserByEmail(email) {
  return User.findOneAsync({ 'local.email': email })
    .then(user => {
      if (!user) {
        return Promise.reject( new NotFoundError(`No account with email '${email}' address exists.`) );
      }
      return user;
    })
  }

  function savePasswordTokenToUser(user, token) {
    user.local.resetPasswordToken = token;
    user.local.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    return user.saveAsync();
  }

  function sendPasswordConfirmationEmail(user) {
    const mailOptions = {
      to: user.local.email,
      from: 'doug@bigskycodeacademy.org',
      subject: 'Your password has been changed',
      text: 'Your password has been reset.'
    };
    return sendMailAsync(mailOptions)
      .then( info => console.log(info, "INFO FROM SEND MAIL ASYNC") )
  }

  function sendPasswordResetEmailToUser(user, token, host) {
    console.log(user, "USER IN PSWORD SEND EMAIL");
    const mailOptions = {
      to: user.local.email,
      from: 'doug@bigskycodeacademy.org',
      subject: 'Your password has been changed',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + host + '/reset_password/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };
    return sendMailAsync(mailOptions)
      .then( info => console.log(info, "INFO FROM SEND MAIL ASYNC") )
  }
