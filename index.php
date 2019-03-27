<?php

// 广告页面配置
$adver = array('nkgg','qysq','tsyj','xwfkys','yysx','zrl','yx');

//$token = isset($_REQUEST['cash']) ? $_REQUEST['cash'] : $adver[mt_rand(0,count($adver)-1)];
//$token = isset($_REQUEST['cash']) ? $_REQUEST['cash'] : 'yx';
$token = isset($_REQUEST['cash']) ? $_REQUEST['cash'] : 'nkgg';

if ($token == 'fanhui' || $token == 'nk') {
    //$token = 'yx';
    $token = 'nkgg';
}

header('Location:/' . $token . '.html');
