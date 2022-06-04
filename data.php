<?php
//connect to database
$server = '167.205.57.204'; //ganti ke ip address nya
$username = 'michael'; //ganti ke admin
$password = '02022000'; //ganti ke adminpass
$database = 'TA23'; //ganti ke TA23
$connection = new mysqli($server, $username, $password, $database, 3307) or die("not connected");

//query data from network_monitor table
$result = mysqli_query($connection,"SELECT * FROM network_monitor ORDER BY id DESC LIMIT 1");

//fetch data
$data = mysqli_fetch_assoc($result);
echo json_encode($data);
?>