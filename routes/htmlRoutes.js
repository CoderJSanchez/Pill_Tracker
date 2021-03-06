var db = require("../models");

module.exports = function(app) {
  // Load index page when first brought to website
  app.get("/", function(req, res) {
    db.medications.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // route to sign up page 
  app.get("/signup", function(req, res) {
    db.medications.findAll({}).then(function(dbExamples) {
      res.render("signup", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  //add prescription page
  app.get("/home/add", function(req, res) {
    db.medications.findAll({}).then(function(dbExamples) {
      res.render("addPrescription", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // route to display and manage prescriptions
  app.get("/home", function(req, res) {
    db.medications.findAll({}).then(function(dbExamples) {
      res.render("home", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  //loads page of a single prescription
  app.get("/home/:id", function(req, res) {
    db.medications.findOne({ where: { id: req.params.id } }).then(function(medications) {
      res.render("prescription", {
        example: medications
      });
    });
  });

 // Render signinfailure page for incorrect password
  app.get("/signinfailure", function(req, res) {
    res.render("signinfailure");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

 
};
