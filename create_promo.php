<?php

session_start();

$con_player = new mysqli('localhost','root','32023202aA','players');
$con_promo = new mysqli('localhost','root','32023202aA','promo');

$id = $_SESSION['id'];
$new_promo = $_POST['name_promo'];
$promo_active = $_POST['promo_active'];
$promo_value = $_POST['promo_value'];

$val_promo_active = (int)$promo_active;
$val_promo_value = (int)$promo_value;
$cost = $val_promo_active*$val_promo_value;

	if($new_promo != '' && $promo_active != '' && $promo_value != '')
	{
		$query_player = "SELECT * FROM player_promo WHERE id='$id'";
		$res_player = $con_player->query($query_player);
		$query = "SELECT * FROM promo_table WHERE Name='$new_promo'";
		$res_promo = $con_promo->query($query);
		$query = "SELECT * FROM player WHERE id='$id'";
		$res = $con_player->query($query);

		$row_player_account = $res->fetch_array(MYSQLI_ASSOC);
		$row_player = $res_player->fetch_array(MYSQLI_ASSOC);
		$row_promo = $res_promo->fetch_array(MYSQLI_ASSOC);

		$balance = $row_player_account['balance'];

		if($row_promo['Name'] === $new_promo)
		{
			echo "Промокод уже существует";
		}
		else
		{
			if($balance >= $cost)
			{
				$query = "INSERT INTO promo_table VALUES('$new_promo','$promo_value','$promo_active')";
				$res = $con_promo->query($query);
				$query = "ALTER TABLE player_promo ADD COLUMN `$new_promo` SMALLINT NOT NULL";
				$res = $con_player->query($query);
				$query = "UPDATE player SET balance=balance-'$cost' WHERE id='$id'";
				$res = $con_player->query($query);
				echo "Промокод успешно создан";
			}
			else
			{
				echo "У вас недостаточно средств";
			}
		}
	}
	else
	{
		echo "Заполните все поля формы";
	}

?>