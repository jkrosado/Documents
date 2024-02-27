<?php

header('Content-Type: image/png');
$imgContent = file_get_contents("./vidshr.png");
echo $imgContent;

/*while(true) {
    sleep(5);
    break;
}*/
?>