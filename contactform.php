<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $emailTo = "sipyscript@gmail.com";
    $headers = "From: " . $emailFrom;
    $txt = "You have received an email from " . $name . ".\n\n" . $message;

    if (mail($emailTo, "Subject of your email", $txt, $headers)) {
        header("Location: contact.html?mailsend");
        exit();
    } else {
        echo "Error sending email. Please try again.";
    }
} else {
    echo "Form submission error. Please try again.";
}
?>
