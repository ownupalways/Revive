<?php
if(isset($_POST['submit'])) {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $msg=$_POST['msg'];

    $to='gwinsworld@gmail.com';
    $subject='From Revive';
    $message="Name: ".$name."\n". "Wrote the Following: "."\n\n" .$msg;
    $headers="From: ".$email;

    if(mail($to, $subject, $message, $headers)){
        echo "<h1>Sent Succesfully!\n".$name.", Thank you for the Feedback</h1>";
    }
    else{
        echo "Something Went Wrong!";
    }
}
?>