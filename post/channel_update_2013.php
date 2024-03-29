<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/update.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); ?>
<?php
    ob_start();

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
?>
<?php
    if(!empty($_POST['nameset'])) {
        $_user_update_utils->update_user_name(
            $_SESSION['siteusername'], 
            $_POST['username2']
        );
    } 
    if(!empty($_POST['bioset'])) {
        $_user_update_utils->update_user_bio(
            $_SESSION['siteusername'], 
            $_POST['bio']
        );
    } 
    
    if(!empty($_POST['channelset'])) {
        $_user_update_utils->update_user_channels(
            $_SESSION['siteusername'], 
            $_POST['videoid']
        );
    }
    
    if(!empty($_POST['featuredset'])) {
        $_user_update_utils->update_user_featured_video(
            $_SESSION['siteusername'], 
            $_POST['videoid']
        );
    } 
    
    if(!empty($_POST['setbannerdisplay'])) {
        $_user_update_utils->update_user_margin_top(
            $_SESSION['siteusername'], 
            $_POST['bannerdisplay']
        );
    } 

    if(!empty($_POST['customtitleset'])) {
        $_user_update_utils->update_user_featured_title(
            $_SESSION['siteusername'], 
            $_POST['featuredtitle']
        );
    } 
    
    if(!empty($_POST['setbannerdisplay'])) {
        $_user_update_utils->update_user_banner_display(
            $_SESSION['siteusername'], 
            $_POST['bannerdisplay']
        );
    }

    if(!empty($_POST['primary'])) {
        $_user_update_utils->update_user_primary_color(
            $_SESSION['siteusername'], 
            $_POST['solidcolor']
        );
    }
    
    if(!empty($_POST['secondary'])) {
        $_user_update_utils->update_user_secondary_color(
            $_SESSION['siteusername'], 
            $_POST['solidcolor']
        );
    } 
    
    if(!empty($_POST['thirdb'])) {
        $_user_update_utils->update_user_third_color(
            $_POST['solidcolor'], 
            $_SESSION['siteusername']
        );
    } 
    
    if(!empty($_POST['textcolor'])) {
        $_user_update_utils->update_user_text_color(
            $_SESSION['siteusername'], 
            $_POST['solidcolor']
        );
    } 
    
    if(!empty($_POST['textprimarycolor'])) {
        $_user_update_utils->update_user_primary_text_color(
            $_SESSION['siteusername'], 
            $_POST['solidcolor']
        );
    } 
    
    if(!empty($_POST['bgoptionset'])) {
        $bgoption = $_POST['bgoption'];
        $bgcolor = $_POST['solidcolor'];
        $default = "default.png";

        $_user_update_utils->update_user_bg_option(
            $bgoption, 
            $_SESSION['siteusername']
        );

        $_user_update_utils->update_user_bg_color(
            $bgcolor, 
            $_SESSION['siteusername']
        );  

        if($bgoption == "solid") {
            $_user_update_utils->update_user_bg_color(
                $bgcolor, 
                $_SESSION['siteusername']
            );    
            
            $_user_update_utils->update_user_bg(
                $default, 
                $_SESSION['siteusername']
            );
        }
    } else if($_SERVER['REQUEST_METHOD'] == 'POST' && @$_POST['pfpset']) {
        $target_dir = "../dynamic/pfp/";
        $imageFileType = strtolower(pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION));
        $target_name = md5_file($_FILES["fileToUpload"]["tmp_name"]) . "." . $imageFileType;

        $target_file = $target_dir . $target_name;

        $uploadOk = true;
        $movedFile = false;

        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
            && $imageFileType != "gif" ) {
            $fileerror = 'unsupported file type. must be jpg, png, jpeg, or gif';
            $uploadOk = false;
            goto skip;
        }

        if (file_exists($target_file)) {
            $movedFile = true;
        } else {
            $movedFile = move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
        }

        if ($uploadOk) {
            if ($movedFile) {
                $stmt = $conn->prepare("UPDATE users SET pfp = ? WHERE `users`.`username` = ?;");
                $stmt->bind_param("ss", $target_name, $_SESSION['siteusername']);
                $stmt->execute();
                $stmt->close();
            } else {
                $fileerror = 'fatal error';
            }
        }
    } else if($_SERVER['REQUEST_METHOD'] == 'POST' && @$_POST['bgset']) {
        if(!empty($_FILES["fileToUpload"]["name"])) {
            $target_dir = "../dynamic/banners/";
            $imageFileType = strtolower(pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION));
            $target_name = md5_file($_FILES["fileToUpload"]["tmp_name"]) . "." . $imageFileType;

            $target_file = $target_dir . $target_name;

            $uploadOk = true;
            $movedFile = false;

            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                && $imageFileType != "gif" ) {
                $fileerror = 'unsupported file type. must be jpg, png, jpeg, or gif';
                $uploadOk = false;
                goto skip;
            }

            if($uploadOk) { 
                if (file_exists($target_file)) {
                    $movedFile = true;
                } else {
                    $movedFile = move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
                }
            }

            if ($uploadOk) {
                if ($movedFile) {
                    $_user_update_utils->update_user_bg(
                        $target_name, 
                        $_SESSION['siteusername']
                    );
                } else {
                    $fileerror = 'fatal error';
                }
            }
        }
    } else if($_SERVER['REQUEST_METHOD'] == 'POST' && @$_POST['bannerset']) {
        if(!empty($_FILES["fileToUpload"]["name"])) {
            $target_dir = "../dynamic/banners/";
            $imageFileType = strtolower(pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION));
            $target_name = md5_file($_FILES["fileToUpload"]["tmp_name"]) . "." . $imageFileType;

            $target_file = $target_dir . $target_name;

            $uploadOk = true;
            $movedFile = false;

            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                && $imageFileType != "gif" ) {
                $fileerror = 'unsupported file type. must be jpg, png, jpeg, or gif';
                $uploadOk = false;
                goto skip;
            }

            if($uploadOk) { 
                if (file_exists($target_file)) {
                    $movedFile = true;
                } else {
                    $movedFile = move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
                }
            }

            if ($uploadOk) {
                if ($movedFile) {
                    $_user_update_utils->update_user_banner(
                        $target_name, 
                        $_SESSION['siteusername']
                    );
                } else {
                    $fileerror = 'fatal error';
                }
            }
        }
    } else if($_SERVER['REQUEST_METHOD'] == 'POST' && @$_POST['videopageset']) {
        if(!empty($_FILES["fileToUpload"]["name"])) {
            $target_dir = "../dynamic/subscribe/";
            $imageFileType = strtolower(pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION));
            $target_name = md5_file($_FILES["fileToUpload"]["tmp_name"]) . "." . $imageFileType;

            $target_file = $target_dir . $target_name;

            $uploadOk = true;
            $movedFile = false;

            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                && $imageFileType != "gif" ) {
                $fileerror = 'unsupported file type. must be jpg, png, jpeg, or gif';
                $uploadOk = false;
                goto skip;
            }

            if($uploadOk) { 
                if (file_exists($target_file)) {
                    $movedFile = true;
                } else {
                    $movedFile = move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
                }
            }

            if ($uploadOk) {
                if ($movedFile) {
                    $_user_update_utils->update_user_video_banner(
                        $target_name, 
                        $_SESSION['siteusername']
                    );
                } else {
                    $fileerror = 'fatal error';
                }
            }
        }
    }
    skip:


    echo "<script>
    window.location = '/post/2013redir/';
    </script>";
?>