<?php

$user = $_POST["user"];
$date = $_POST["date"];
$time = $_POST["time"];
$dateTime = $date . " " . $time;

$returnText = "";

$servername = "localhost";
$username = "root";
$password = "";
$basename = "onlineChat";

$dbc = mysqli_connect($servername, $username, $password, $basename);

 if($dbc){
   $stmt = $dbc->prepare("SELECT messages.user, messages.message FROM messages
      WHERE messages.mtime = ? AND messages.user != ?");

   $stmt->bind_param('ss', $dateTime,  $user);
   $stmt->execute();
   $stmt->store_result();
   $stmt->bind_result($us, $message);

   mysqli_close($dbc);

  while($stmt->fetch()){
    $returnText .= "<p>" . $us . ": " . $message . "</p>";
  }
 }

 echo $returnText;

?>
