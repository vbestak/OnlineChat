<?php

$user = $_GET["user"];
$time = $_GET["time"];
$message = $_GET["message"];

$servername = "localhost";
$username = "root";
$password = "";
$basename = "onlineChat";

$dbc = mysqli_connect($servername, $username, $password, $basename);

 if($dbc){
   $stmt = $dbc->prepare("INSERT INTO messages(user, message, mtime) VALUES (?,?,?) ");

   $stmt->bind_param('sss', $user, $message, $time);
   $stmt->execute();
   mysqli_close($dbc);
 }

?>
