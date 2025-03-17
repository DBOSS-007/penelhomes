// custom.js

document.getElementById("subscribeform").addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;

  // Perform validation or make API call here

  fetch("/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
   .then((response) => response.json())
   .then((data) => {
      console.log("Subscribed: " + email);
      alert("Welcome, " + email + "! Thank you for subscribing.");
    })
   .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while subscribing. Please try again later.");
    });
});

// server-side code (Node.js)

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

app.post("/subscribe", (req, res) => {
  const email = req.body.email;

  // Send welcome email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dboss9930@gmail.com",
      pass: "GODSOWN200702",
    },
  });

  const mailOptions = {
    from: "dboss9930@gmail.com",
    to: email,
    subject: "Welcome to Penel Homes!",
    text: `
      Thank you for subscribing to Penel Homes!

      We are excited to have you as a part of our growing community.
      We will keep you updated on our latest projects and offers.

      Have a great day!
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Subscribed successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

















// // custom.js

// document.getElementById("subscribeform").addEventListener("submit", function (event) {
//   event.preventDefault();

//   var email = document.getElementById("email").value;

//   // Perform validation or make API call here

//   console.log("Subscribed: " + email);
// });








// // to get current year
// function getYear() {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     document.querySelector("#displayYear").innerHTML = currentYear;
// }
// getYear();

// // nav menu 
// function openNav() {
//     document.getElementById("myNav").classList.toggle("menu_width")
//     document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
// }
