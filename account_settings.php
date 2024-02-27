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

  $_base_utils->initialize_page_compass("Account Settings");

  if (isset($_SESSION['username'])) {
    header("Location: /sign_in");
  } else {
    /* don't do anything here because this means user is signed in */
  }
  $_user = $_user_fetch_utils->fetch_user_username($_SESSION['siteusername']);
?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/guide.php"); ?>
<!DOCTYPE html>
<html>
    <head>
<style>
        .act-set-box {
            float: right;
            width: 235px;
            background-image: linear-gradient(to bottom,#fafafa 0,#dcdcdc 100%);
            box-shadow: inset 0 0 1px #fff;
            padding: 5px;
            width: 281px;
        }
        .act-set-box {
            background: #f1f1f1!important;
            border: 1px solid #e5e5e5;
        }
        #body-container {width: 100%;height: auto!important;}

        #page {
            display: inline-block!important;
        }
        
        .www-core-container {
            margin: 0;
            width: 100%;
        }

        div#page-container {
            width: 974px;
            margin-left: 225px;
        }
body #footer-hh-container, body #footer-container {
    margin-top: 0px!important;
}
input[type="text"],
textarea {
  background: #fff;
  border: 1px solid #d9d9d9;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  border-top: 1px solid #c0c0c0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #000;
  font-family: arial, sans-serif;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
  outline: 0;
  padding: 4px;
  border-radius: 0px!important;
}
input[type="text"]:focus,
textarea:focus {
  border: 1px solid #4d90fe!important;
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3)!important;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3)!important;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3)!important;
}
#body-container {width: 100%;}

.www-core-container {
    margin: 0!important;
    width: 100%!important;
}

div#page-container {
    width: 974px;
    margin-left: 225px;
}

#guide {
	width: 175px;
	left: 0!important;
	right: 0!important;
	top: 0;
	padding-top: 20px;
	bottom: 0;
	left: 0;
	position: absolute;
	z-index: 1;
	margin-top: 50px;
	padding-left: 50px!important;
	border-right: solid 1px #e2e2e2;
	background-color: #fbfbfb;
}
div#page-container {
    margin-top: 50px;
}

.sign-in-form-box {
    background: #f1f1f1!important;
    border: 1px solid #e5e5e5;
}

input[type="submit"] {
    background-color: #f8f8f8!important;
    color: #333!important;
    border-color: #d3d3d3!important;
    padding: 7px!important;
    border: 1px solid #c6c6c6!important;
    font-weight: bold!important;
    font-size: 12px!important;
    background-image: none!important;
    width: auto!important;
    height: auto!important;
    font-family: arial,sans-serif;
}
        </style>
        <title>FulpTube - <?php echo $_base_utils->return_current_page(); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/static/css/www-core.css">
        <?php /*
            if($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['password'] && $_POST['username']) {
                $username = htmlspecialchars(@$_POST['username']);
                $password = @$_POST['password'];
                $passwordhash = password_hash(@$password, PASSWORD_DEFAULT);

                $stmt = $conn->prepare("SELECT password FROM `users` WHERE username = ?");
                $stmt->bind_param("s", $username);
                $stmt->execute();
                $result = $stmt->get_result();
                if(!mysqli_num_rows($result)){ { $error = "Incorrect username or password!"; goto skip; } }
                $row = $result->fetch_assoc();
                $hash = $row['password'];

                if(!password_verify($password, $hash)){ $error = "Incorrect username or password!"; goto skip; }
                $_SESSION['siteusername'] = $username;

                echo "<script>
                window.location = '/';
                </script>";
            }
            skip:
        */ ?>
    </head>
    <body>
        <div class="www-core-container">
            <?php require($_SERVER['DOCUMENT_ROOT'] . "/static/header.php"); ?>
            <div class="act-set-box" style="margin: 12px 0 0;padding: 20px 25px 15px;width: 335px; background: #f1f1f1;border: 1px solid #e5e5e5;">
           <h2 style="font-size: 16px;line-height: 17px;height: 16px;margin: 0 0 1.2em;position: relative;">Account Settings</h2>
           <div class="acct-set-container"></div>
<div class="userinfo" style="display: flex;"><a href="/channel?n=<?php echo htmlspecialchars($_SESSION['siteusername']); ?>"><img src="/dynamic/pfp/<?php echo $_user['pfp']; ?>" style="width: 50px; height: 50px; background-color: white;"></a><div style="display: flex;flex-direction: column;margin-left: 10px;"><a href="/channel?n=<?php echo htmlspecialchars($_SESSION['siteusername']); ?>" class="username" style="font-size: 16px;color: black;text-decoration: none!important;"><b><?php echo htmlspecialchars($_SESSION['siteusername']); ?></b></a><p class="subscount" style="padding-top: 5px;"><?php echo $_user_fetch_utils->fetch_subs_count($_SESSION['siteusername']); ?> subscribers</p><a style="padding-top: 5px;" href="./history">Watch History</a></div></div><h3 style="margin: 10px 0; font-size: 14px;">Profile picture</h3>
<div class="pfp-upl"><form method="post" action="/post/channel_update_2013" enctype="multipart/form-data">
                    <input type="file" name="fileToUpload" id="avatar-upload">
                    <!--<button class="yt-uix-button yt-uix-button-default" id="av-uplod">Select File</button>-->
                    <input class="yt-uix-button yt-uix-button-default" type="submit" value="Upload" name="pfpset">
                </form></div><h3 style="margin: 10px 0; font-size: 14px;">Channel banner</h3>
<div class="bg-upl"><form method="post" action="/post/channel_update_2013" enctype="multipart/form-data">
                    <input type="file" name="fileToUpload" id="background-upload">
                    <!--<button class="yt-uix-button yt-uix-button-default" id="av-uplod">Select File</button>-->
                    <input class="yt-uix-button yt-uix-button-default" type="submit" value="Upload" name="bgset">
                </form></div><h3 style="margin: 10px 0; font-size: 14px;">Bio</h3>
<div class="bg-upl"><form method="post" action="/post/channel_update" enctype="multipart/form-data">
                        <textarea style="width: 345px;padding: 0px;background-color:white;border: 1px solid #d3d3d3;resize: none;margin-bottom: 10px;" id="biomd" placeholder="Bio" name="bio"><?php echo htmlspecialchars($_user['bio']); ?></textarea><br>
                        <input class="yt-uix-button yt-uix-button-default" name="bioset" type="submit" value="Set">
                    </form></div><h3 style="margin: 10px 0; font-size: 14px;">Featured video</h3><p style="margin-bottom: 10px;">Paste the video ID of the video you want to feature below.</p>
<div class="bg-upl"><form method="post" action="/post/channel_update" enctype="multipart/form-data">
                        <input type="text" style="padding:5px;border-radius:5px;background-color:white;border: 1px solid #d3d3d3;width: 86%;" id="biomd" placeholder="Video ID" value="<?php echo htmlspecialchars($_user['featured']);?>" name="videoid">
                        <input class="yt-uix-button yt-uix-button-default" name="featuredset" type="submit" value="Set" style="width: 12%!important;">
                    </form></div><h3 style="margin: 10px 0; font-size: 14px;">Featured channels</h3><p style="margin-bottom: 10px;">Case sensitive usernames of people you want to feature, separated by commas.</p>
<div class="fc-set"><form method="post" action="/post/channel_update" enctype="multipart/form-data">
                        <input type="text" style="padding:5px;border-radius:5px;background-color:white;border: 1px solid #d3d3d3;width: 86%;" id="biomd" placeholder="Comma-separated usernames" value="<?php echo htmlspecialchars($_user['featured_channels']);?>" name="videoid">
                        <input class="yt-uix-button yt-uix-button-default" name="channelset" type="submit" value="Set" style="width: 12%!important;">
                    </form></div>
<h3 style="margin: 10px 0; font-size: 14px;">Sign in options</h3>
<div class="logout"><a href="/static/logout" style="
    background-color: #f8f8f8!important;
    padding: 7px;
    display: inline-block;
    border: 1px solid #c6c6c6!important;
    color: #333!important;
    font-weight: bold!important;
    font-size: 12px!important;
    vertical-align: middle;
    cursor: pointer;
    text-decoration: none!important;
">Log out</a></div>
            </div>
            <div style="margin-left: 10px;" class="setting-details"><h1 style="font-size: 18px; padding: 5px 0;">Account Settings</h1><p>Set account settings and customize your FulpTube channel.</p></div>
            <br><br>
        </div>
    </body>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/footer.php"); ?>
</html>