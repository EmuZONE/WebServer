<?php
include 'config.php';

$userdata =  $_POST['userdata'];
$email = $_POST['email']; // передаем переменной email значение глобального массива POST
$gender = $_POST['gender'];
$birthdate = $_POST['birthdate'];
$region = $_POST['region'];
$city = $_POST['city'];
$phone = $_POST['phone'];
echo $_POST;
$sql = 'INSERT INTO tsppbd(userdata, email, gender, birthdate, region, city, phone) VALUES("'.$userdata.'", "'.$email.'", "'.$gender.'", "'.$birthdate.'", "'.$region.'", "'.$city.'","'.$phone.'")';
// проверка
ob_start();
if(mysql_query($sql)) {
    echo 'Данные добавлены';
}
?>