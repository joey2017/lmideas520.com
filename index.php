<?php

// 广告页面配置
$adver = array('nkgg','qysq','tsyj','xwfkys','yysx','zrl');

//$token = isset($_REQUEST['cash']) ? $_REQUEST['cash'] : $adver[mt_rand(0,count($adver)-1)];
//$token = $adver[mt_rand(0,count($adver)-1)];
$token = isset($_REQUEST['cash']) ? $_REQUEST['cash'] : $adver[0];

header('Location:/' . $token . '.html');
