<?php
//connect to database
$server = '167.205.57.204'; 
$username = 'michael'; 
$password = '02022000'; 
$database = 'TA23'; 
$connection = new mysqli($server, $username, $password, $database, 3306) or die("not connected");

//query data from network_monitor table
$result = mysqli_query($connection,"SELECT * FROM network_monitor ORDER BY id DESC LIMIT 1");

//fetch data
$data = mysqli_fetch_assoc($result);
echo json_encode($data);
?>