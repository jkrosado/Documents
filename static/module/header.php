<?php
date_default_timezone_set('America/New_York');
?>
<div class="www-header-mast">
    <a href="/"><img src="/static/img/vidshr.png" class="www-logo"></a>
    <span class="www-motto">
    Broadcast Yourself&trade;
    </span>
    <div class="www-user-info" <?php if(isset($_SESSION["siteusername"])) { ?>style="margin-top: 14px!important;"<?php } ?>>
        <?php if(!isset($_SESSION['siteusername'])) { ?>
            <strong><a style="border-left: 0px;" class="first" href="/sign_up">Sign Up</a></strong> 
            <a href="/help">Help</a> 
            <a class="" href="/sign_in">Sign In</a>
        <?php } else { ?>
            <?php if($_user_fetch_utils->fetch_unread_pms($_SESSION['siteusername']) == 0) { ?>
                <a href="/inbox" style="margin-right: 5px;border-left: 0;"><b style="color:grey;line-height: 0;font-size: 12px;font-weight: 100;">(<?php echo $_user_fetch_utils->fetch_unread_pms($_SESSION['siteusername']); ?>)</b> <img style="width: 16px;vertical-align: middle;margin-bottom: 3px;" src="/static/img/mail.png"></a>
            <?php } else { ?>
                <a href="/inbox" style="margin-right: 5px;border-left: 0;"><b style="color:grey;line-height: 0;font-size: 12px;font-weight: 100;">(<?php echo $_user_fetch_utils->fetch_unread_pms($_SESSION['siteusername']); ?>)</b> <img style="width: 16px;vertical-align: middle;margin-bottom: 3px;" src="/static/img/mail_notif.png"></a>
            <?php } ?>
            <div class="dropdown">
                <button onclick="dropdown()" style="color: blue;font-size: 14px;font-weight: bold;" class="dropbtn"><?php echo htmlspecialchars($_SESSION['siteusername']); ?><div style="width: 0px;height: 0;border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 6px solid #4908d4;margin-left: 3px;display: inherit;"></div></button>
                <div id="dropdown-header" style="margin-left:6px;" class="dropdown-content">
                    <a href="/user/<?php echo htmlspecialchars($_SESSION['siteusername']); ?>">My Channel</a>
                    <a href="/channel_subscriptions?n=<?php echo htmlspecialchars($_SESSION['siteusername']); ?>">Subscriptions</a>
                    <a href="/inbox/">Inbox</a>
                    <a href="/video_manager">My Videos</a>
                    <a href="/favorites">Favorites</a>
                    <a href="/friends">Friends</a>
                </div>
            </div>
			<a href="/quicklist">QuickList (<?php echo $_user_fetch_utils->fetch_quicklist_videos($_SESSION['siteusername']); ?>)</a>
            <a href="/help">Help</a> 
            <a href="/logout">Sign Out</a> 
        <?php } ?>
    </div>
    <br>
    <div class="www-header-list">
        <a class="www-header-item" href="/">Home</a>
        <a class="www-header-item" href="/videos.php">Videos</a>
        <a class="www-header-item" href="/channels">Channels</a>
        <a class="www-header-item" href="/community">Community</a>

        <form class="search-form" autocomplete="off" action="/search_query">
            <input name="q" class="search-box" value="<?php if(isset($_GET['q'])) { echo htmlspecialchars($_GET['q']); } else { echo ""; } ?>">
            <input type="submit" class="search-button" value="Search">
        </form>

        <a href="/upload_video">
            <button style="cursor:pointer;" class="upload_button">
                Upload
            </button>
        </a>
    </div>
</div>
<?php 
    if(isset($_SESSION['siteusername']))
        $_base_utils->update_login_time($_SESSION['siteusername']); 
?>

<div class="alerts">
    <?php if(isset($_GET['userdoesntexist'])) { ?>
    <div class="alert" id="userdoesntexist" style="background-color: #FFA3A3;">
        This user does not exist!
    </div>
    <?php } ?>

    <?php if(isset($_GET['groupdoesntexist'])) { ?>
    <div class="alert" id="groupdoesntexist" style="background-color: #FFA3A3;">
        This group does not exist!
    </div>
    <?php } ?>

    <?php if(isset($_GET['uploaded'])) { ?>
    <div class="alert" id="uploaded">
        Your video has successfully been uploaded! It will be processing in the background. If your video does not appear within an hour, please reupload.
    </div>
    <?php } ?>

    <?php if(isset($_GET['videodoesntexist'])) { ?>
    <div class="alert" id="videodoesntexist" style="background-color: #FFA3A3;">
        This video does not exist!
    </div>
    <?php } ?>

    <?php if(isset($_GET['pagedoesntexist'])) { ?>
    <div class="alert" id="videodoesntexist" style="background-color: #FFA3A3;">
        This page does not exist!
    </div>
    <?php } ?>

    <?php if(isset($_GET['redirfromwn'])) { ?>
    <div class="alert" id="wikieol" style="background-color: #FFA3A3;">
        As of September 9, 2021; Wikinothing is no longer available. Thank you for contributing to Wikinothing.
    </div>
    <?php } ?>

    <?php if(isset($_GET['error'])) { ?>
    <div class="alert" id="custom" style="background-color: #FFA3A3;">
        <?php echo(htmlspecialchars($_GET['error'])) ?>
    </div>
    <?php } ?>

    <?php if(isset($_GET['alert'])) { ?>
    <div class="alert" id="custom">
        <?php echo(htmlspecialchars($_GET['alert'])) ?>
    </div>
    <?php } ?>

    <?php if(isset($_GET['flushed'])) { ?>
    <div class="center" id="flushed" style="text-align: center;font-size: 150px!important;">
        😳
    </div>
    <style>
#flushed {
    visibility: visible!important;
}
* :not(div#flushed) :not(body) :not(.www-core-container) :not(.alerts), .www-home-right {
    font-size: 0;
    visibility: hidden;
}
    </style>
    <?php } ?>
</div>
<script>
function dropdown() {
  document.getElementById("dropdown-header").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
</script>
<?php
$subscribed = array();

    

if(isset($_SESSION['siteusername'])) {
    $stmt = $conn->prepare("SELECT * FROM subscribers WHERE sender = ? LIMIT 25");
    $stmt->bind_param("s", $_SESSION['siteusername']);
    $stmt->execute();
    $result = $stmt->get_result();
    while($row = $result->fetch_assoc()) {
        array_push($subscribed, $row['reciever']);
    }
}


if(isset($_SESSION['siteusername']) && @$_SESSION['siteusername'] == "amog_us") 
    header("Location: /logout");


?>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3933165557403387"
     crossorigin="anonymous"></script>