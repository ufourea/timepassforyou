<?php
$anags=array("phouiare","ellho","weamose","viobuos","burias","pyto","postinaynte","asaeb","abbleb","abcla","blabde","intady","adis","remarke","thalery","yather","lebulnite","cafribate","cadafe");
$words=array("euphoria","hello","awesome","obvious","airbus","typo","spontaneity","abase","babble","cabal","dabble","dainty","dais","earmark","earthly","earthy","ebullient","fabricate","facade");
$meanings=array("A feeling or state of intense excitement and happiness","Used as a greeting","Extremely impressive or daunting; inspiring great admiration, apprehension, or fear","Easily perceived or understood; clear, self-evident, or apparent","An aircraft designed to carry a large number of passengers economically, esp. over relatively short routes","A typographical error","The condition of being spontaneous","lower, degrade"," unnecessary chatter","small group of persons secretly united to promote their own interests","work in a non serious way","delicate","stage","set aside for a purpose","of this earth","of earth","Showing excitement","weave, create","front of a building");
$anagrams=array();
$max=(int) sizeof($anags)-1;
$rand=rand(0,$max);
array_push($anagrams,array('anag' => $anags[$rand],'word' => $words[$rand],'meaning' => $meanings[$rand]));
echo json_encode(array('anagrams' => $anagrams));
?>