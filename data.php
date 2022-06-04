<?php
//connect to database
$server = 'localhost'; //ganti ke ip address nya
$username = 'root'; //ganti ke admin
$password = ''; //ganti ke adminpass
$database = 'test'; //ganti ke TA23
$connection = new mysqli($server, $username, $password, $database, 3307) or die("not connected");

//query data from network_monitor table
$result = mysqli_query($connection,"SELECT * FROM network_monitor ORDER BY id DESC LIMIT 1");

//fetch data
$data = mysqli_fetch_assoc($result);
echo json_encode($data);
?>