<?php

$apikey = isset($_GET['key'])?htmlspecialchars($_GET['key']):'デフォルトのキー';

/********以下は編集しないこと*********/

$lat = htmlspecialchars($_GET['lat']);
$lng = htmlspecialchars($_GET['lng']);
$range = htmlspecialchars($_GET['range']);
$genre = htmlspecialchars($_GET['genre']);
$count = htmlspecialchars($_GET['count']);

if( empty($lat) || empty($lng) || empty($range) || empty($genre) || empty($count)){
    // var_dump($lat);
    // var_dump($lng);
    // var_dump($range);
    // var_dump($genre);
    // var_dump($count);
    die('ERROR');
}

$url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/';

$access_url = $url.'?key='.$apikey.'&lat='.$lat.'&lng='.$lng.'&range='.$range.'&genre='.$genre.'&count='.$count.'&format=json';

$json = file_get_contents($access_url);
$json_arr = json_decode($json, true);


header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
echo json_encode($json_arr);
exit();