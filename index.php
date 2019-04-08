<?php

require_once __DIR__ . '/src/Mysql.class.php';

$db = Mysql::newClass();
$db->pdoConnect(['mysql:host=127.0.0.1;dbname=wx;charset=utf8', 'wx', 'JKzfSHsZw2DYD5Jk']);
$db->select('system_ad_position', '*', ['status' => 1, 'is_deleted' => 0], 'sort asc,id desc'); //发送sql
$result = $db->selectOne(); //获取一条数据

header('Location:/' . $result['name']);
