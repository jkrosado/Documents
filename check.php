<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); ?>
<?php
if(@$_SESSION["siteusername"] == "bhief" || @$_SESSION["siteusername"] == "amog_us") {
    $_SESSION = [];
    session_destroy();
    header("Location: https://google.com/?q=touchable+grass+near+me");
} else {
   echo '<script>document.location.href = document.location.origin;</script>';
}
?>