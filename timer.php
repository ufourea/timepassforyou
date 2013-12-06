<?php
$fh=fopen('time.txt','r');
$savetime=fread($fh,filesize('time.txt'));
$thistime=time();
$difftime=$savetime-$thistime;
echo $difftime;
?>