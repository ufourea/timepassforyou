<?php
$my_file="chat.txt";
$nick=$_GET['nick'];
$handle=fopen($my_file,'a') or die("Cannot open chat.txt");
$chatData="<font color='red'>".$nick." says: </font>". $_GET['chatData'];
fwrite($handle,$chatData.PHP_EOL);
fclose($handle);
?>