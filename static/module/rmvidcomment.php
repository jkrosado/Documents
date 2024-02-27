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


    if(isset($_GET['id'])) {
                $stmt = $conn->prepare("SELECT * FROM comments WHERE id = ?");
                $stmt->bind_param("s", $_GET['id']);
                $stmt->execute();
                $result = $stmt->get_result();
                while($comment = $result->fetch_assoc()) {
                $_video = $_video_fetch_utils->fetch_video_rid($comment['toid']);
                  if($comment['author'] == $_SESSION['siteusername']) {
                    $deleteAllowed = true;
                  } elseif($_video['author'] == $_SESSION['siteusername']) {
                    $deleteAllowed = true;
                  } else {
                    $deleteAllowed = false;
                  }
                  if(!$deleteAllowed) {
                    header('Location: ' . $_SERVER['HTTP_REFERER']);
                    die();
                  }
                }

  
      if(!$_video_fetch_utils->comment_exists($_GET['id'])) {
        header('Location: ' . $_SERVER['HTTP_REFERER']);
        die();
      } else {
        $_video_delete_utils->remove_comment($_GET['id']);
        header('Location: ' . $_SERVER['HTTP_REFERER']);
      }
    } else {
      header('Location: ' . $_SERVER['HTTP_REFERER']);
    }

?> 