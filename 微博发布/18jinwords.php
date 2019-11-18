<?php
	$arr = array('你妹','垃圾','尼玛比','傻逼','操你妈','中国');
	$txt = $_POST['txt'];
	if($arr.indexOf($txt) !== -1){
        echo 1;
    }else{
        echo 0;
    }
?>