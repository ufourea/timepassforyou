<?php
$my_file="chat.txt";
$handle=fopen($my_file,'r') or die("Cannot open file in read mode");
while(!feof($handle))
{
$fileContent=fgets($handle,4096);
if($fileContent!="")
echo "<p>".$fileContent."</p>";
}
fclose($handle);
?>