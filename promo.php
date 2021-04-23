<?php

session_start();

$con_player = new mysqli('localhost','root','32023202aA','players');
$con_promo = new mysqli('localhost','root','32023202aA','promo');

$id = $_SESSION['id'];
$promo = $_POST['input_promo'];


	$query_player = "SELECT * FROM player_promo WHERE id='$id'";
	$res_player = $con_player->query($query_player);
	$query_promo = "SELECT * FROM promo_table WHERE Name='$promo'";
	$res_promo = $con_promo->query($query_promo);

	$row_player = $res_player->fetch_array(MYSQLI_ASSOC);
	$row_promo = $res_promo->fetch_array(MYSQLI_ASSOC);

	$value_promo = $row_promo['Value'];
	$name_promo = $row_promo['Name'];

	if($row_promo['Name'] === $promo)
	{
		$query = "ALTER TABLE player_promo ADD COLUMN `$name_promo` VARCHAR(16) DEFAULT 0";
		$res = $con_player->query($query);
		if($row_player[$name_promo] == 1 && $row_promo['Active'] != 0)
		{
			echo "Вы уже активировали промокод";
		}
		else if($row_player[$name_promo] == 0 && $row_promo['Active'] != 0)
		{
			$query_1 = "UPDATE player_promo SET `$name_promo`=1 WHERE id='$id'";
			$res=$con_player->query($query_1);
			$query_2 = "UPDATE promo_table SET Active=Active-1 WHERE Name='$promo'";
			$res=$con_promo->query($query_2);
			$query = "UPDATE player SET balance=balance+'$value_promo' WHERE id='$id'";
			$res = $con_player->query($query);
			echo "Промокод успешно акивирован";
		}
		else if($row_promo['Active'] == 0)
		{
			$query = "UPDATE player_promo SET `$name_promo`=-1 WHERE id='$id'";
			$res = $con_player->query($query);
			echo "Активации закончились";
		}
	}
	else
	{
		echo "Промокод не найден";
	}

?>