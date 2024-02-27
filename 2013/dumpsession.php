<?php
    session_start();
    echo "<h3> PHP Session dump</h3>";
    foreach ($_SESSION as $key=>$val)
    echo $key." ".$val."<br/>";
?>