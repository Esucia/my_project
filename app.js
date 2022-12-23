const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const variable = {
  firstName: "Kyle",
};

app.get("/", (req, res) => {
  res.render("pages/index", {
    variable: variable,
  });
});

// User Login
app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.post("/login", (req, res) => {
  // implement login logic from form
  res.redirect("/");
});

// User Register
app.get("/register", (req, res) => {
  res.render("pages/register");
});

app.post("/register", (req, res) => {
  // implement login logic from form
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
