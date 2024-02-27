<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); ?>
<?php
  $_user_fetch_utils = new user_fetch_utils();
  $_user_insert_utils = new user_insert_utils();
  $_video_fetch_utils = new video_fetch_utils();
  $_base_utils = new config_setup();
 
  $_base_utils->initialize_db_var($conn);
  $_video_fetch_utils->initialize_db_var($conn);
  $_user_insert_utils->initialize_db_var($conn);
  $_user_fetch_utils->initialize_db_var($conn);
?>
<?php
if(isset($_GET['l'])) {
  if($_GET['l'] == "hitchhiker") {
    $_SESSION["layout"] = "hitchhiker";
  } elseif($_GET['l'] == "2009") {
    $_SESSION["layout"] = "2009";
  } else {
    echo "<title>410 Bad Request</title><h1>Bad Request</h1><p>Invalid data received. (layout invalid)</p><hr><address>Confused? Refresh the page that landed you here, or join the <a href='https://discord.gg/WfMZxKPh5U'>FulpTube Discord Server</a> and paste the URL and error code in the <code>#bug-report</code> channel.</address>";
  die();
  }
} else {
  header("HTTP/1.1 410 Bad request");
  echo "<title>410 Bad Request</title><h1>Bad Request</h1><p>Invalid data received. (could not find layout in URL)</p><hr><address>Confused? Refresh the page that landed you here, or join the <a href='https://discord.gg/WfMZxKPh5U'>FulpTube Discord Server</a> and paste the URL and error code in the <code>#bug-report</code> channel.</address>";
die();
}
header('Location: ' . $_SERVER['HTTP_REFERER']);
?>