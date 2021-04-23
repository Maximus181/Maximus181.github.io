<?php
session_start();

header('Content-Type: application/json');

$id = $_SESSION['id'];

$conn = new mysqli('localhost','root','32023202aA','players');

$query = "SELECT * FROM player WHERE id='$id'";
$res = $conn->query($query);

$row = $res->fetch_array(MYSQLI_ASSOC);

$arr = array('id'=>$row['id'],'username'=>$row['username'],'userpass'=>$row['userpass'],'balance'=>$row['balance']);
$json = json_encode($arr);

print_r($json);
?>