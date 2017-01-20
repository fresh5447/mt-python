const mongoose = require('mongoose');
const User = require('../models/user');
const Org = require('../models/org');
const crypto = require('crypto');
const async = require('async');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config();


const MAILER_OPTIONS = {
  auth: {
      api_key: process.env.SENDGRID_API
  }
}

const transport = nodemailer.createTransport(sgTransport(MAILER_OPTIONS));
const sendMailAsync = Promise.promisify(transport.sendMail).bind(transport);

module.exports = function(app, passport) {

  app.post('/signup', function(req, res, next) {
    const authenticator = passport.authenticate('local-signup', function(err, user, info) {
      console.log('SIGNUP INFO', info);
      if (err) {
        console.log("ONE ERR: ", err)
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

  app.get('/singleUser/:student_id', function(req, res){
      User.findById(req.params.student_id, function(err, user){
        if(err){
          console.log(err)
        } else {
          res.json(user)
        }
      })
  })

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

  app.get('/reset/:token', function(req, res) {
     User.findOne({ 'local.resetPasswordToken': req.params.token, 'local.resetPasswordExpires': { $gt: Date.now() } }, function(err, user) {
       if (!user) {
         return res.json({message: 'Password reset token is invalid or has expired.'});
       }
       res.redirect('/reset');
     });
   });

   app.post('/reset/:token', function(req, res) {


   async.waterfall([
     function(done) {
       User.findOne({ 'local.resetPasswordToken': req.params.token, 'local.resetPasswordExpires': { $gt: Date.now() } }, function(err, user) {
         if (!user) {
           return  res.json({ message: 'Password reset token is invalid or has expired.' });
         }

         user.local.password = user.generateHash(req.body.password);
         user.local.resetPasswordToken = undefined;
         user.local.resetPasswordExpires = undefined;

         user.save(function(err) {
           req.logIn(user, function(err) {
             done(err, user);
           });
         });
       });
     },
     function(user, done) {
       var options = {
         auth: {
             api_key: process.env.SENDGRID_API
         }
       }
       var mailer = nodemailer.createTransport(sgTransport(options));
       var mailOptions = {
         to: user.email,
         from: 'passwordreset@demo.com',
         subject: 'Your password has been changed',
         text: 'Hello,\n\n' +
           'This is a confirmation that the password for your account ' + user.local.email + ' has just been changed.\n'
       };
       mailer.sendMail(mailOptions, function(err) {
         res.json({ message: 'Success! Your password has been changed.' });
         done(err);
       });
     }
   ], function(err) {
     console.log('did it fix it?');
   });
 });


   app.post('/forgot', function(req, res, next) {

     const email = req.body.email;
     let token;
     generateCryptoBuffer()
       .then(t => {
         token = t;
         return findUserByEmail(email);
       })
       .then(user => savePasswordTokenToUser(user, token))
       .then(user => sendPasswordResetEmailToUser(user))
       .catch(err => console.log(err, "ERROR somewhere in the process of sending the email"))
       .finally(next);
   })

};

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
        throw new Error(`No account with email '${email}' address exists.`);
      }
      return user;
    })
  }

  function savePasswordTokenToUser(user, token) {
    user.local.resetPasswordToken = token;
    user.local.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    return user.saveAsync();
  }

  function sendPasswordResetEmailToUser(user) {
    console.log(user, "USER IN PSWORD SEND EMAIL");
    const mailOptions = {
      to: user.local.email,
      from: 'doug@bigskycodeacademy.org',
      subject: 'Your password has been changed',
      text: 'Hello,\n\n' +
        'This is a confirmation that the password for your account ' + user.local.email + ' has just been changed.\n'
    };
    return sendMailAsync(mailOptions)
      .then( info => console.log(info, "INFO FROM SEND MAIL ASYNC") )
  }
