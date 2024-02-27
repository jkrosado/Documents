<?php 
/* require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php");
require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php");
require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php");
require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/update.php");
require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); */
?>
<?php /*
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
*/
?>
<?php
require($_SERVER['DOCUMENT_ROOT'] . "/ltchoosefix/2009/view_playlist.php");
/*if(isset($_SESSION['layout'])) {
  if($_SESSION['layout'] == "hitchhiker") {
    require($_SERVER['DOCUMENT_ROOT'] . "/ltchoosefix/sign_up.php");
  } elseif($_SESSION['layout'] == "2009") {
    require($_SERVER['DOCUMENT_ROOT'] . "/ltchoosefix/2009/edit_video.php");
  }
} else {
  require($_SERVER['DOCUMENT_ROOT'] . "/ltpicker.php");
}*/
?>