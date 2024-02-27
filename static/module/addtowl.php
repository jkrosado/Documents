<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/update.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/delete.php"); ?>
<?php
    $_user_fetch_utils = new user_fetch_utils();
    $_video_fetch_utils = new video_fetch_utils();
    $_video_insert_utils = new video_insert_utils();
    $_user_insert_utils = new user_insert_utils();
    $_user_update_utils = new user_update_utils();
    $_video_delete_utils = new video_delete_utils();
    $_base_utils = new config_setup();
    
    $_base_utils->initialize_db_var($conn);
    $_video_fetch_utils->initialize_db_var($conn);
    $_video_insert_utils->initialize_db_var($conn);
    $_user_fetch_utils->initialize_db_var($conn);
    $_user_insert_utils->initialize_db_var($conn);
    $_user_update_utils->initialize_db_var($conn);
    $_video_delete_utils->initialize_db_var($conn);
?>
<?php

  if(!isset($_SESSION['siteusername'])) {
    header("Location: /sign_in");
  }
    if(isset($_GET['v'])) {
                $stmt = $conn->prepare("SELECT video FROM watchlater WHERE video = ? AND author = ?");
                $stmt->bind_param("ss", $_GET['v'], $_SESSION['siteusername']);
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows) {
                  $_video_delete_utils->remove_wl($_GET['v'], $_SESSION['siteusername']);
                  header('Location: ' . $_SERVER['HTTP_REFERER']);
                  die();
                }

  
      if(!$_video_fetch_utils->video_exists($_GET['v'])) {
        header('Location: ' . $_SERVER['HTTP_REFERER']);
      } else {
        $_video_insert_utils->add_to_wl($_GET['v'], $_SESSION['siteusername']);
        header('Location: ' . $_SERVER['HTTP_REFERER']);
      }
    } else {
      header('Location: ' . $_SERVER['HTTP_REFERER']);
    }

?> 