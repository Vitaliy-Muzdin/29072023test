<?php
$name = $_POST['name'];
$phone = $_POST['tel'];
$error = '';

$EOL = "\n";
$success = false;
if(!$name) {$error .= '<div class="textError__form">Укажите свое имя. </div>';}
if(!$phone) {$error .= '<div class="textError__form">Укажите ваш телефон. </div>';}

if(!$error) {
    $from = 'info@test.ru';
    $address = "test@yandex.ru";
    $html = "
        Имя: ".$name."<br/>
        \nТелефон: ".$phone."<br/>
    ";
    $subject = "Письмо с сайта 290723test.ru от " . $name;
    $boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.

    $headers = "MIME-Version: 1.0;" . $EOL;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"" . $EOL;
    $headers .= "From: " . $from . $EOL;

    $body = "--$boundary" . $EOL;
    $body .= "Content-Type: text/html; charset=UTF-8" . $EOL;
    $body .= "Content-Transfer-Encoding: base64" . $EOL;
    $body .= $EOL; // раздел между заголовками и телом html-части
    $body .= chunk_split(base64_encode($html)) . $EOL;


    $body .= "--" . $boundary;
    
    $body .= "--". $EOL;
    $success = mail($address, $subject, $body, $headers);  //, $html

    if($success) {$error = '<div class="successText__form"><p>Спасибо за обращение!</p> <p>Мы скоро свяжемся с вами!</p></div>';}
}
//unlink ($file_name_new_full);
$response = array(
    'success' => $success,
    'message' => $error
);
echo json_encode($response);
//else {echo '<div class="err">'.$error.'</div>';}
?>