const express = require('express');
const Org = require('../models/org');
const User = require('../models/user');

const Router = new express.Router();

// Router.route('/addUserToOrg/:org_id/:user_id')
//   .put((req, res) => {
//     Org.findById(req.params.org_id, (err, org) => {
//       if(err) {
//         res.json({ message: 'could not find org' })
//       } else {
//         if(req.body.member){
//           console.log("FOUND MEMBER")
//           org.members.push(req.body.member)
//           console.log(org.members)
//         }
//         org.save((er) => {
//           if (er) {
//             res.json(err)
//           } else {
//             User.findById(req.body.user, (err, u) => {
//               if(err){
//                 console.log("Could not find user")
//               } else {
//                 u.orgs.push(req.params.org_id)
//                 u.save();
//               }
//             })
//             res.json(org)
//           }
//         })
//       }
//     })
//   })


Router.route('/')
  .get((req, res) => {
    Org.find()
    .exec((err, r) => {
      if (err) {
        res.json(err, 'ERROR');
      } else {
        res.json(r);
      }
    });
  })
  .post((req, res) => {
    const org = new Org({
      name: req.body.name,
      shortKey: req.body.shortKey
    });
    org.save((err, r) => {
      if (err) {
        res.json({ message: 'there was an error saving your r' });
      } else {
        res.json(r);
      }
    });
  });

Router.route('/:id')
  .get((req, res) => {
    Org.findById(req.params.id)
    .populate('members')
    .exec((err, org) => {
      if (err) {
        res.json({ message: 'there was an error finding this org' });
      } else {
        res.json(org);
      }
    });
  })
  .put((req, res) => {
    Org.findById(req.params.id, (err, org) => {
      if(err) {
        res.json({ message: 'could not find org' })
      } else {
        org.name = req.body.name ? req.body.name : org.name;
        org.shortKey = req.body.shortKey ? req.body.shortKey : org.shortKey;
        if(req.body.member){
          console.log("FOUND MEMBER")
          org.members.push(req.body.member)
          console.log(org.members)
        }
        org.save((er) => {
          if (er) {
            res.json(err)
          } else {
            res.json(org)
          }
        })
      }
    })
  })
  .delete(function(req, res){
    Org.remove({ _id: req.params.id }, function(err) {
      if(err){
        res.json({ message: "Was unable to delete course" })
      } else {
        res.json("Org deleted!")
      }
    })
  });

module.exports = Router;
