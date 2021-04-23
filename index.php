<?php
session_start();

if(isset($_SESSION['id']))
{

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Document</title>
</head>
<body>
	<header class="header">
		<a href="" class="header_name">Pulik.games</a>
		<span class="promo"><a href="promo.html">Промокод</a></span>
		<span class="balance" name="balance">0.00</span>
		<button class="please">Попросить денег у Макса</button>
		<span class="header_menu">
			<ul class="header_ul">
				<li class="header_list"><a href="log_out.php">Выход</a></li>
			</ul>
		</span>
	</header>
	<div class="container">
		<div class="help_win_r"></div>
		<div class="help_win_l"></div>
		<div class="mainvalue">Выиграш: <span class="win">2.00</span> uah</div>
		<div class="center">
			<div class="bet_block">
				<span class="text_bet">Ставка: </span> <input type="text"	 class="myinput bet" value="1">
				<span class="bet_menu">
					<button class="max_bet">max</button>
					<button class="min_bet">min</button>
					<button class="x2_bet">x2</button>
					<button class="half_bet">1/2</button>
				</span>
			</div>	
			<br>
			<div class="chance_block">
				<span class="text_chance">Шанс: </span> <input type="text" class="myinput chance" value="50">
				<span class="chance_menu">
					<button class="max_chance">max</button>
					<button class="min_chance">min</button>
					<button class="x2_chance">x2</button>
					<button class="half_chance">1/2</button>
				</span>
			</div>
			<br>
			<div class="btn_tickets">
				<div class="low">
					<div class="bilet_low">0 - <span class="lower_ticket">499999</span></div>
					<button class="btn_low">Меньше</button>
				</div>
				<div class="high">
					<div class="bilet_high"><span class="higher_ticket">500000</span> - 999999</div>
					<button class="btn_high">Больше</button>
				</div>
			</div>
		</div>
		<div class="result"></div>
	</div>
	<footer class="footer"></footer>
  <form action='https://api.random.org/signatures/form' method='post' target="_blank">
    <input type='hidden' name='format' value='json' />
    <input id="randomer" type='hidden' name='random' value=''/>
    <input id="signatur_inp" type='hidden' name='signature' value='' />
  <input type='submit' class="ver" value='Verify result'/>
</form>
	<script src="script.js"></script>
</body>
</html>

<?php

}
else
{

echo <<< _END

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Document</title>
</head>
<body>
	<header class="header">
		<a href="" class="header_name">Pulik.games</a>
		<span class="header_menu">
			<ul class="header_ul">
				<li class="header_list"><a href="log_in.php">Вход</a></li>
				<li class="header_list"><a href="sign_up.php">Регистрация</a></li>
			</ul>
		</span>
	</header>
</body>
</html>

_END;

}
?>