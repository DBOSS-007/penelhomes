<?php
// Database connection parameters
$servername = "localhost"; // Change this to your database server hostname
$username = "username"; // Change this to your database username
$password = "password"; // Change this to your database password
$dbname = "Newsletter_Subscribers "; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate email
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Insert subscriber into database
        $sql = "INSERT INTO NewsletterSubscribers (email) VALUES ('$email')";

        if ($conn->query($sql) === TRUE) {
            echo "Subscription successful!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request method.";
}

// Close connection
$conn->close();

