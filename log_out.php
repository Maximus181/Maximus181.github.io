<?php
session_start();
if(ini_get("session.use_cookies"))
{
	$params = session_get_cookie_params();
	setcookie(session_name(),'',time() - 42000);
	header('Location: index.php');
}

?>