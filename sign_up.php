<?php

$conn = new mysqli('localhost','root','32023202aA','players');

$username = $_POST['username'];
$userpass = $_POST['userpass'];

$query = "SELECT * FROM player";
$result = $conn->query($query);

$row = $result->fetch_array(MYSQLI_ASSOC);

if(isset($_POST['submit']))
{
	if(!empty($username) && !empty($userpass) && $_POST['username'] != $row['username'])
	{
		$query = "INSERT INTO player VALUES(NULL,'$username','$userpass',0)";
		$result = $conn->query($query);
		echo "Вы успешно зарегестрировались";
		$que = "SELECT * FROM player WHERE username='$username'";
		$res = $conn->query($que);
		$row = $res->fetch_array(MYSQLI_ASSOC);
		$id = $row['id'];
		echo $id;
		$prom_query = "INSERT INTO player_promo(id) VALUES('$id')";
		$prom_res = $conn->query($prom_query);
	}
	else
	{
		echo "Заполните поля ввода или данное имя занято";
	}
}


echo <<< _END

<form action="sign_up.php" method="post">
Регистрация
<br>
Username: <input type="text" name="username">
<br>
Password: <input type="password" name='userpass'>
<br>
<input type="submit" name="submit" value="Sign up">
</form>

_END

?>