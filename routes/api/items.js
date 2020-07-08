const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Item = require("../../models/Item");
const validateItemInput = require("../../validation/items");

// router.get("/", (req, res) => {
//   Item.find({ title: /req.body.query/i })
//     .sort({ title: 1 })
//     .then((items) => res.json(items))
//     .catch((err) => res.status(404).json({ noitemssfound: "No items found" }));
// });

router.get("/", (req, res) => {
  Item.find({
      $and: [
        {"title": /req.body.search/i },
        {"booking.endDate": {$lt: req.body.startDate}},
        {"booking.startDate": {$gt: req.body.endDate}}
      ] 
    })
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({ noitemssfound: "No items found" }));
})

// router.get("/", (req, res) => {
//   Item.find({ title: /req.body.query/ })
//     .sort({ title: 1 })
//     .then((items) => res.json(items))
//     .catch((err) => res.status(404).json({ noitemssfound: "No items found" }));
// });

router.get("/user/:user_id", (req, res) => {
  Item.find({ user: req.params.user_id })
    .sort({ title: 1 })
    .then((title) => res.json(title))
    .catch((err) =>
      res.status(404).json({ noitemssfound: "No items found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) =>
      res.status(404).json({ noitemfound: "No item found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateItemInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newItem = new Item({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      rate: req.body.rate,
      user: req.user.id,
    });

    newItem.save().then((item) => res.json(item));
  }

);

// router.post('/search-items', (req, res) => {
//   let itemPattern = new RegExp("^"+req.body.query)
//   Item.find({title:{$regex:itemPattern}})
//   .then(item => res.json(item))
//   .catch(err => console.log(err))
// })

module.exports = router;
