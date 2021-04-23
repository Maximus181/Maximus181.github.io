<?php

if($_SERVER["CONTENT_TYPE"] == 'application/json')
{
	$conn = new mysqli('localhost','root','32023202aA','players');

	$postData = file_get_contents('php://input');

	$mydata = json_decode($postData, true);

	$id = $mydata['id'];

	echo $id;

	$bal = $mydata['balance'];

	echo $bal;

	$query = "UPDATE player SET balance='$bal' WHERE id='$id'";
	$res = $conn->query($query);
}

?>