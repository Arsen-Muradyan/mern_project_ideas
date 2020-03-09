const express = require("express");
const router = express.Router();
const Idea = require("../models/idea");
/*
  @route /api/ideas
  @method GET
*/
router.get("/", (req, res) => {
  Idea.find()
    .sort({ _id: -1 })
    .then(ideas => {
      res.json({
        ideas
      });
    });
});
/*
  @route /api/ideas/:id
  @method GET
*/
router.get("/:id", (req, res) => {
  Idea.findById(req.params.id)
    .then(idea => {
      res.json({
        idea
      });
    })
    .catch(() => {
      res.json({
        status: 404,
        message: "Idea Not Found"
      });
    });
});
/*
  @route /api/ideas/
  @method POST
*/
router.post("/", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;
  if (title && description && author) {
    let idea = new Idea({
      title,
      description,
      author
    });
    idea.save().then(idea => {
      res.json({
        idea
      });
    });
  } else {
    res.json({
      status: 400,
      message: "All fields required"
    });
  }
});
/*
  @route /api/ideas/:id
  @method DELETE
*/
router.delete("/:id", (req, res) => {
  Idea.findById(req.params.id)
    .then(idea => {
      idea.delete().then(ideas => {
        res.json(ideas);
      });
    })
    .catch(() => {
      res.json({
        status: 404,
        message: "Idea Not Found"
      });
    });
});

module.exports = router;
