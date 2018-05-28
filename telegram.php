<?php

/* https://api.telegram.org/bot505847452:AAH2QxIdaRNQP1xf3vOB4-299evyWDiCoyM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$gameTitle = $_POST['gameTitle'];
$gamePricePerWeek = $_POST['gamePricePerWeek'];
$gamePricePerMonth = $_POST['gamePricePerMonth'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = "505847452:AAH2QxIdaRNQP1xf3vOB4-299evyWDiCoyM";
$chat_id = "-216679458";
$arr = array(
  'Игра: ' => $gameTitle,
  'Цена в неделю: ' => $gamePricePerWeek,
  'Цена в месяц: ' => $gamePricePerMonth,
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>