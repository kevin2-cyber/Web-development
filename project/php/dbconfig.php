<?php 
$server = 'localhost';
$serverUsername = 'root';
$password = '';
$databaseName = 'mydb';

$connect = mysqli_connect($server, $serverUsername, $password, $databaseName);
if(!$connect){
    echo'Database connection was not succesful'. mysqli_error($connect);
    die($connect);
}

?>