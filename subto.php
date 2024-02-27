<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/update.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); ?>
<?php
    $subTo = $_GET['n'];
    $_user_fetch_utils = new user_fetch_utils();
    $_video_fetch_utils = new video_fetch_utils();
    $_video_insert_utils = new video_insert_utils();
    $_user_insert_utils = new user_insert_utils();
    $_user_update_utils = new user_update_utils();
    $_base_utils = new config_setup();
    
    $_base_utils->initialize_db_var($conn);
    $_video_fetch_utils->initialize_db_var($conn);
    $_video_insert_utils->initialize_db_var($conn);
    $_user_fetch_utils->initialize_db_var($conn);
    $_user_insert_utils->initialize_db_var($conn);
    $_user_update_utils->initialize_db_var($conn);
    $_video['subscribed'] = $_user_fetch_utils->if_subscribed(@$_SESSION['siteusername'], $subTo);
?>

<?php
$a = "/get/unsubscribe?n=";
$alt = "/get/subscribe?n=";
$b = "Location: ";
$bb = "Location: ";
$ab = $b .= $a;
$altb = $bb .= $alt;
$altSub = $altb .= $subTo;
$abSub = $ab .= $subTo;
    if($_video['subscribed']) { header($abSub); } else { header($altSub); }
?>