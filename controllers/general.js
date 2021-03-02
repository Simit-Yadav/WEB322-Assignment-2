// Name: Simit Sanjay Yadav
// Student ID: 151009198
// Section: NCC

const express = require("express");
const router = express.Router();
const mealKits = require("../models/node");

router.get("/", function (req, res) {
  res.render("general/home", {
    topMeal: mealKits.getTopMeals(),
  });
});

router.get("/about", function (req, res) {
  res.render("navList/about");
});

router.get("/on-the-menu", function (req, res) {
  res.render("navList/onTheMenu", {
    data1: mealKits.getOnTheMenu("Classic"),
    data2: mealKits.getOnTheMenu("Popular"),
  });
});

router.get("/specials", function (req, res) {
  res.render("navList/specials");
});

router.get("/faq", function (req, res) {
  res.render("navList/faqs");
});

router.get("/pricing", function (req, res) {
  res.render("navList/pricing");
});

router.get("/contribute", function (req, res) {
  res.render("navList/contribute");
});

router.get("/login", function (req, res) {
  res.render("loginSignup/login");
});

router.get("/signup", function (req, res) {
  res.render("loginSignup/signup");
});

module.exports = router;
