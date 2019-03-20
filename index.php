<?php

// 广告页面配置
$adver = array('nkgg','qysq','tsyj','xwfkys','yysx','zrl');

//$token = isset($_REQUEST['cash']) ? $_REQUEST['cash'] : $adver[mt_rand(0,count($adver)-1)];
$token = isset($_REQUEST['cash']) ? $_REQUEST['cash'] : 'nkgg';

if ($token == 'fanhui' || $token == 'nk') {
    $token = 'nkgg';
}

header('Location:/' . $token . '.html');
