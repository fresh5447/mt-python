const express = require('express');
const Course = require('../models/course');

const Router = new express.Router();

Router.route('/')
  // .get((req, res) => {
  //   Course.find()
  //   .populate('students')
  //   .populate('modules')
  //   .exec((err, r) => {
  //     if (err) {
  //       res.json(err, 'ERROR');
  //     } else {
  //       res.json(r);
  //     }
  //   });
  // })
  .get((req, res) => {
    Course.find((err, courses) => {
      if(err){
        res.json(err)
      } else {
        res.json(courses)
      }
    })
  })
  .post((req, res) => {
    const course = new Course({
      title: req.body.title,
      desc: req.body.desc,
      publish: req.body.publish
    });
    course.save((err, r) => {
      if (err) {
        res.json({ message: 'there was an error saving your r' });
      } else {
        res.json(r);
      }
    });
  });

Router.route('/:id')
  .get((req, res) => {
    Course.findById(req.params.id)
    .populate('modules')
    .exec((err, course) => {
      if (err) {
        res.json({ message: 'there was an error finding this course' });
      } else {
        res.json(course);
      }
    });
  })
  .put((req, res) => {
    Course.findById(req.params.id, (err, course) => {
      if(err) {
        res.json({ message: 'could not find course' })
      } else {
        course.title = req.body.title ? req.body.title : course.title;
        course.desc = req.body.desc ? req.body.desc : course.desc;
        course.publish = req.body.publish ? req.body.publish : course.publish;

        course.save((er) => {
          if (er) {
            res.json(err)
          } else {
            res.json(course)
          }
        })
      }
    })
  })
  .delete(function(req, res){
    Course.remove({ _id: req.params.id }, function(err) {
      if(err){
        res.json({ message: "Was unable to delete course" })
      } else {
        res.json("Course deleted!")
      }
    })
  });

module.exports = Router;
