<?php
session_start();

$config = array(); // add other stuff here
$post = array(); // used for handling post inputs, put sanitized inputs into here!!!

$config['db_host'] = getenv("127.0.0.1");
$config['db_user'] = getenv("root");
$config['db_pass'] = getenv("passw0rd");
$config['db_name'] = getenv("subrocks");

$config['recaptcha_secret'] = ""; 
$config['recaptcha_sitekey'] = "";

$conn = mysqli_connect($config['db_host'], $config['db_user'], $config['db_pass'], $config['db_name']);
?>