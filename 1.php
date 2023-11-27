<?php

try {
// URL вашого локального сайту
$url = 'https://minimal/?wc-api=wc_gateway_liqpay';

// Дані для POST-запиту
$data = array(
    'param1' => 'value1',
    'param2' => 'value2',
);

// Використовуйте функцію curl для відправки POST-запиту
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Додати параметр для відключення перевірки SSL
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

// Додати параметр для виведення помилок
curl_setopt($ch, CURLOPT_FAILONERROR, true);

// Виконайте запит і отримайте відповідь
$response = curl_exec($ch);

// Перевірте наявність помилок
if ($response === false) {
    echo 'Curl error: ' . curl_error($ch);
}

// Закрийте з'єднання
curl_close($ch);

// Виведіть відповідь
echo $response;


} catch (Exception $e) {
    echo 'Помилка: ' . $e->getMessage();
}