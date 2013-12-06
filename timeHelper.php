<?php
$savetime=time()+20;
$fh=fopen('time.txt','w');
fwrite($fh,$savetime);
fclose($fh);
?>