const express = require("express");
let categoryRoutes = express.Router();
let mongodb = require('mongodb').MongoClient;
let url = process.env.mongoUrl;

var category = [
  {
    id: 1,
    category: "Fashion",
    thumb: "https://i.ibb.co/56VP0Fn/cloths.jpg",
  },
  {
    id: 2,
    category: "Electronics",
    thumb: "https://i.ibb.co/pw5Wtdx/appliances.jpg",
  },
  {
    id: 3,
    category: "Essentials",
    thumb: "https://i.ibb.co/0cw34xm/essentials.jpg",
  },
  {
    id: 4,
    category: "Footwear",
    thumb: "https://i.ibb.co/r3SZq8S/footware.jpg",
  },
];

categoryRoutes.route("/").get(function (req, res) {
  res.send(category);
});
categoryRoutes.route("/deatils").get(function (req, res) {
  res.send("catagory details");
});

module.exports = categoryRoutes;
