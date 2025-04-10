<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'avhan_db';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name  = $_POST['name'];
$email = $_POST['email'];
$event = $_POST['event'];

$sql = "INSERT INTO registrations (name, email, event) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $event);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "error";
}

$conn->close();
?>
