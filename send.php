<?php

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;  
$mail->IsSMTP();
$mail->CharSet = 'UTF-8';
$mail->SMTPDebug = 1;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587  
$mail->IsHTML(true);
$mail->Username = "sendingsivenkov@gmail.com";
$mail->Password = "1Jfdks8Hns";
$mail->setFrom('sendingsivenkov@gmail.com', 'Заявка с сайта while.sivenkov.by');
$mail->addAddress('sivenkovvlad@gmail.com', 'Заявка с сайта while.sivenkov.by');
$mail->addReplyTo('sivenkovvlad@gmail.com', 'Заявка с сайта while.sivenkov.by');
$mail->isHTML(true); 
$mail->Subject = 'Заявка с сайта while.sivenkov.by';


$name         = $_POST["name"];
$phone        = $_POST["phone"];
$site         = $_POST["site"];
$fromWhere    = $_POST["from-where"];


if  ( isset($name) && $name !== '' )           $mail->Body = 'Имя: ' . $name . "<br/>";
if  ( isset($phone) && $phone !== '' )         $mail->Body .= 'Телефон: ' . $phone . "<br/>";
if  ( isset($site) && $site !== '' )           $mail->Body .= 'Сайт: ' . $site . "<br/>";
if  ( isset($fromWhere) && $fromWhere !== '' ) $mail->Body .= 'Откуда отправили форму: ' . $fromWhere . "<br/>";


$sendMail = $mail->send();
if (!$sendMail) echo 'Mailer Error: ' . $mail->ErrorInfo;
else echo 'Mailer send';

?>

