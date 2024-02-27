<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); ?>
<?php
    $_user_fetch_utils = new user_fetch_utils();
    $_video_fetch_utils = new video_fetch_utils();
    $_user_insert_utils = new user_insert_utils();
    $_base_utils = new config_setup();
    
    $_base_utils->initialize_db_var($conn);
    $_video_fetch_utils->initialize_db_var($conn);
    $_user_fetch_utils->initialize_db_var($conn);
    $_user_insert_utils->initialize_db_var($conn);

    $_user = $_user_fetch_utils->fetch_user_username($_GET['n']);

    if($_user_fetch_utils->user_exists($_user['username']) == false) {
        // require($_SERVER['DOCUMENT_ROOT'] . "/yts/pgbin/terminated.php");
        $channelErr = file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/yts/pgbin/terminated.php");
        die($channelErr);
    }

    if(empty($_user['bio'])) {
        $_user['bio'] = "No bio specified...";
    }

    $_user['subscribed'] = $_user_fetch_utils->if_subscribed(@$_SESSION['siteusername'], $_user['username']);
include("./static/header.php");
include("./static/guide.php");
    $id = $_GET["id"];
?>
<div id="content" style="width: 1152px;">
<title><?php echo htmlspecialchars($_user['username']); ?> - FulpTube</title>
<div class='channelContents' style="padding:0px; background: #fff;width: 961px;display: inline-block;">
    <div class='ChannelBan' style="position: relative;height: 175px;border-bottom: 1px solid #d8d8d8;"><img style='margin-left: 25px;background-color: #ffffff;' width='100px' height='100px' src='/dynamic/pfp/<?php echo $_user['pfp']; ?>'></div>
    <div id='watch7-user-header' style='padding: 0 20px 0!important;'><br><span class="yt-uix-button-subscription-container yt-uix-button-context-light" style="float:right;"><button onclick=";window.location.href=this.getAttribute('href');return false;" href="/get/<?php if($_user['subscribed']) { echo "un"; } ?>subscribe?n=<?php echo htmlspecialchars($_user['username']); ?>" class="yt-subscription-button yt-subscription-button-js-default None  yt-uix-button <?php if($_user['subscribed']) { echo "yt-uix-button-subscribed-branded"; } else { echo "yt-uix-button-subscribe-branded"; } ?>" type="button" data-subscription-button-type="branded" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D&amp;feature=watch" data-subscription-value="UCxnNQpMtVrZRZh3aOkmnK4w" data-subscription-type="" data-subscription-feature="watch" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe-branded" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">  <span class="subscribe-hh-label">Subscribe</span>
  <span class="subscribed-hh-label">Subscribed</span>
  <span class="unsubscribe-hh-label">Unsubscribe</span>
 </span></button><span class="yt-subscription-button-subscriber-count-branded-horizontal"><?php echo $_user_fetch_utils->fetch_subs_count($_user['username']); ?></span><span class="yt-subscription-button-disabled-mask"></span></span>
    <h1 class='channelName' style='padding-top: 10px;font-size: 20px;font-weight: normal;margin:12px;margin-top: 0px;margin-bottom: 17px; cursor: default;'><?php echo htmlspecialchars($_user['username']); ?><?php
if($_user['partner'] == "y") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-verified' alt='' title='Verified' data-tooltip-text='Verified'>";
}
?><?php
if($_user['partner'] == "d") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-disputed' alt='' title='Unofficial Channel' data-tooltip-text='Unofficial Channel'>";
}
?></h1>
    <div style="display: block;height: 47px;display: inline-flex;flex-direction: row;align-content: flex-end;align-items: flex-end;"><a class="channels-tab tab-inactive" href="/channel?n=<?php echo htmlspecialchars($_user['username']); ?>"><img id="tab-home-img" src="/yts/imgbin/homeinactive.png"></a><a class="channels-tab tab-inactive" href="/channel_videos?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>Videos</p></a><a class="channels-tab tab-inactive" href="/channel_discussion?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>Discussion</p></a><a class="channels-tab tab-active" href="/channel_about?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>About</p></a></div>
        </div>

<div class='channelAbout' style="background: #fff;border: 1px solid rgba(0, 0, 0, .098);display: flow-root;">
    <div class="channel-about">
        <ul class="about-stats" style="margin-right: 15px;float: right;margin-bottom: 15px;">
            <ul class="about-stats">
                <li class="about-stat">
                    <span class="about-stat-value"><?php echo $_user_fetch_utils->fetch_subs_count($_user['username']); ?></span> subscribers
                </li>
                <li class="about-stat">
                    <span class="about-stat-value"><?php echo $_video_fetch_utils->fetch_views_from_user($_user['username']); ?></span> views
                </li>
                <li class="about-stat joined-date">
                    Joined <?php echo date("M d, Y", strtotime($_user['created'])); ?>
                </li>
            </ul>
        </ul>
            <p><?php echo htmlspecialchars($_user['bio']); ?></p>
    </div>
  </div>
</div>
<?php
if($_user['featured_channels'] == "") {
    $channels = array("Spotlight");
} else {
    $channels = explode(",", $_user['featured_channels']);
}
?>
<div class="branded-page-v2-secondary-col">
          

        <div class="branded-page-related-channels branded-page-gutter-padding">
          <h2 class="branded-page-related-channels-title" dir="ltr">
        <a>Featured Channels</a>
    </h2>
<?php
                        $id = 1;
                        foreach($channels as $videoID) {
                            if(!empty($videoID)) {
$_user2 = $_user_fetch_utils->fetch_user_username($videoID); $id++;
if($_user2 == 0) {
  $_user2 = $_user_fetch_utils->fetch_user_username("Spotlight"); $id++;
}
$_user2['subscribed'] = $_user_fetch_utils->if_subscribed(@$_SESSION['siteusername'], $_user2['username']);
                ?>
        <ul class="branded-page-related-channels-list ">
        

        

        <li class="branded-page-related-channels-item clearfix">
    <a href="/channel?n=<?php echo htmlspecialchars($_user2['username']); ?>" class="spf-link yt-uix-sessionlink">
        <span class="video-thumb ux-thumb yt-thumb-square-32 branded-page-related-channels-thumb"><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" src="/dynamic/pfp/<?php echo htmlspecialchars($_user2['pfp']); ?>" width="32" data-group-key="thumb-group-0"><span class="vertical-align"></span></span></span></span>
    </a>
    <div class="branded-page-related-channels-content">
        <h3>
    <a class="spf-link yt-uix-tooltip yt-uix-sessionlink " href="/channel?n=<?php echo htmlspecialchars($_user2['username']); ?>" dir="ltr">

      <span class="qualified-channel-title" title="<?php echo htmlspecialchars($_user2['username']); ?>"><span class="qualified-channel-title-inner"><?php echo htmlspecialchars($_user2['username']); ?><?php
if($_user2['partner'] == "y") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-verified' alt='' title='Verified' data-tooltip-text='Verified'>";
}
?><?php
if($_user2['partner'] == "d") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-disputed' alt='' title='Unofficial Channel' data-tooltip-text='Unofficial Channel'>";
}
?></span></span><span class="qualified-channel-title-badge"></span>
    </a>
  </h3>

        <span class=" yt-uix-button-subscription-container yt-uix-button-context-light"><button onclick=";window.location.href=this.getAttribute('href');return false;" type="button" class=" yt-uix-button <?php if($_user2['subscribed']) { echo "yt-uix-button-subscribed-unbranded"; } else { echo "yt-uix-button-subscribe-unbranded"; } ?>" href="/get/<?php if($_user2['subscribed']) { echo "un"; } ?>subscribe?n=<?php echo htmlspecialchars($_user2['username']); ?>" data-style-type="unbranded" role="button" data-sessionlink="ei=5zAwUZZDlKeEAfqNgaAC&amp;feature=rc-rel"><span class="yt-uix-button-icon-wrapper">  <img class="yt-uix-button-icon yt-uix-button-icon-subscribe-unbranded" src="/yts/img/pixel-vfl3z5WfW.gif" alt="" title="">
<span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content"><span class="subscribe-hh-label">Subscribe</span><span class="subscribed-hh-label">Subscribed</span><span class="unsubscribe-hh-label">Unsubscribe</span> </span></button><span class="yt-subscription-button-subscriber-count-unbranded-horizontal"><?php echo $_user_fetch_utils->fetch_subs_count($_user2['username']); ?></span><span class="yt-subscription-button-disabled-mask"></span></span>
    </div>
  </li>

        

        

        

  </ul>
<?php } } ?>
    </div>


        </div>
</div>
<link type="text/css" rel="stylesheet" href="/asset/base.css">
</div>
<style>
.yt-lockup2 {
    list-style: none;
}
.tab-active {
    border-bottom: 3px solid #cc181e;
    color: #333;
}

.tab-inactive {
    color: #9c9c9c;
    border-bottom: 3px solid #ffffff00;
}
.channels-tab {
    margin: 12px;
    margin-bottom: 0px!important;
    font-size: 11px;
    font-weight: bold;
    cursor: pointer;
    padding: 6px 7px 10px 6px!important;
    display: inline-block;
    text-decoration: none!important;
}
.channels-tab:hover {
    border-bottom: 3px solid #cc181e;
    color: #333;
}
.yt-thumb-default-520 {
    width: 520px;
    height: 292.5px;
}
.yt-lockup2 .yt-lockup2-content {
    padding-left: 534px!important;
}
<?php
  if($_user["2012_bg"] == "default.png") {
    echo "
    .ChannelBan {
      background-color: #333333;
      background-image: url(/yts/imgbin/default_banner_hq-vfl4dpY8T.png);
      background-size: contain;
    }"; } else {
    echo "
    .ChannelBan {
      background-image: url(/dynamic/banners/".$_user['2012_bg'].");
      background-position: center 0px;
    }"; }
?>
#tab-home-img:hover {
    content: url(/yts/imgbin/homeinactive.png);
}
.channelAbout {
    width: 959px
}
.about-stat-value {
    font-weight: bold;
    font-size: 15px;
}
.channel-about {
    padding: 15px;
    padding-bottom: 10px;
}
.about-stats .about-stat {
    font-size: 13px;
    color: #555;
}
ul.about-stats {
    line-height: 18px;
    text-align: right;
}
.about-stats .about-stat.joined-date {
    margin-top: 20px;
}
</style>
<?php
echo "</div></div>";
include("./static/footer.php");
?>