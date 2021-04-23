<?php
session_start();

$conn = new mysqli('localhost','root','32023202aA','players');

$username = $_POST['username'];
$userpass = $_POST['userpass'];

if(isset($_POST['submit']))
{
	if(!empty($username) && !empty($userpass))
	{
		$query = "SELECT * FROM player WHERE username='$username' AND userpass='$userpass'";
		$result = $conn->query($query);
		$row = $result->fetch_array(MYSQLI_ASSOC);
		if($username == $row['username'] && $userpass == $row['userpass'])
		{
			$_SESSION['id'] = $row['id'];
			$_SESSION['username'] = $row['username'];
			$_SESSION['userpass'] = $row['userpass'];
			$_SESSION['balance'] = $row['balance'];
			header('Location: index.php');
		}
		else
		{
			echo "Не верно введеные данные";
		}
		
	}
	else
	{
		echo "Заполните поля ввода";
	}
}

echo <<< _END

<form action="log_in.php" method="post">
Вход
<br>
Username: <input type="text" name="username">
<br>
Password: <input type="password" name='userpass'>
<br>
<input type="submit" name="submit" value="Sign in">
</form>

_END

?>