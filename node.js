// server-side code (Node.js)

const express = require("express");
const nodemailer = require("nodemailer");
const mysql = require("mysql");

const app = express();

app.use(express.json());

// Set up MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "your_mysql_username",
  password: "your_mysql_password",
  database: "your_database_name",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connected to MySQL database");
});

app.post("/subscribe", (req, res) => {
  const email = req.body.email;

  // Send welcome email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_email_password",
    },
  });

  const mailOptions = {
    from: "your_email@gmail.com",
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

      // Store subscriber's email in the database
      const sql = "INSERT INTO subscribers (email) VALUES (?)";
      connection.query(sql, [email], (error, result) => {
        if (error) {
          console.error("Error storing subscriber:", error);
          res.status(500).json({ message: "Error storing subscriber" });
        } else {
          console.log("Subscriber stored:", email);
          res.status(200).json({ message: "Subscribed successfully" });
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});