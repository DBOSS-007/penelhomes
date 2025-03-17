const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/subscribe', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    // Log the subscription (can replace with database logic if needed)
    console.log(`New subscription from ${name} (${email})`);

    // Optionally, send an email to the company or the subscriber
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Change to your email provider
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password or app password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // Send email to the subscriber
        subject: 'Welcome to Penel Homes Newsletter',
        text: `Dear ${name},\n\nThank you for subscribing to Penel Homes Newsletter! Stay tuned for updates.\n\nBest regards,\nPenel Homes Team`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send confirmation email. Please try again.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
