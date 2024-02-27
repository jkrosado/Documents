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

    if($_user['featured'] == "None") {
        $sqlQry = "author";
        $sqlParam = $_GET['n'];
    } else {
        $sqlQry = "rid";
        $sqlParam = $_user['featured'];
    }

    if (strpos($_SERVER['REQUEST_URI'], "user") !== false){
        header("Location: /channel?n=".$_GET['n']);
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
    <div style="display: block;height: 47px;display: inline-flex;flex-direction: row;align-content: flex-end;align-items: flex-end;"><a class="channels-tab tab-active" href="/channel?n=<?php echo htmlspecialchars($_user['username']); ?>"><img id="tab-home-img" src="/yts/imgbin/home.png"></a><a class="channels-tab tab-inactive" href="/channel_videos?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>Videos</p></a><a class="channels-tab tab-inactive" href="/channel_discussion?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>Discussion</p></a><a class="channels-tab tab-inactive" href="/channel_about?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>About</p></a></div>
        </div>

<div class='channelVideos' style='background: #fff; border: 1px solid #d8d8d8;'>
                  <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE " . $sqlQry . " = ? ORDER BY id DESC LIMIT 1");
                    $stmt->bind_param("s", $sqlParam);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?> 
<li class='yt-lockup2 yt-lockup2-video yt-uix-tile context-data-item clearfix '>
       <div class='yt-lockup2-thumbnail'>
      <div id="watch7-video" style="height: 292.5px; width: 520px;">
        <?php require($_SERVER['DOCUMENT_ROOT'] . "/channelplayer.php"); ?>
      </div>
       </div>
       <div class='yt-lockup2-content'>
          <h3 class='yt-lockup2-title'><a class='yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink ' dir='ltr' data-sessionlink='ei=CNGX56CUibUCFQo8RAodEEKIqg%3D%3D&amp;ved=CAIQvxs%3D' href='/watch?v=<?php echo $video['rid']; ?>'><?php echo htmlspecialchars($video['title']); ?></a></h3>
          <p class='yt-lockup2-meta'>  <?php echo $_video_fetch_utils->get_video_views($video['rid']); ?> views</a><span class='metadata-separator'>•</span><?php echo $_video_fetch_utils->time_elapsed_string($video['publish']); ?></p>
          <p class='yt-lockup2-description' dir='ltr'><?php echo mb_strimwidth(htmlspecialchars($video['description']), 0, 500, "..."); ?></p>
          <div class='yt-lockup2-badges'>
             <ul class='item-badge-line'></ul>
          </div>
       </div>
    </li>
<?php } ?>
<div class="compact-shelf shelf-item yt-uix-slider yt-uix-slider-default-style c4-box yt-uix-slider-at-head">
    <h2 class="branded-page-module-title">
      <a class="spf-link yt-uix-sessionlink" title="Uploads">Uploads</a>
    </h2>
      <div class="yt-uix-slider-body context-data-container">
    <ul class="yt-uix-slider-list" style="left: 0px;white-space: nowrap;">
                  <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE author = ? ORDER BY id DESC LIMIT 5");
                    $stmt->bind_param("s", $_GET['n']);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    if($result->num_rows == 0) {
                        echo "<span style='display: block;text-align: center;font-style: oblique;'>This channel has no videos.</span>";
                    }
                    while($video2 = $result->fetch_assoc()) { 
                ?> 
        <li class="channels-content-item yt-uix-slider-item " style="margin-right: 8px;">
  <span class="context-data-item">
    <div class="channel-video-thumb-container">
      <a href="/watch?v=<?php echo $video2['rid']; ?>" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto spf-link"><span class="video-thumb ux-thumb yt-thumb-default-167 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/dynamic/thumbs/<?php echo $video2['thumbnail']; ?>" alt="Thumbnail" width="167" data-group-key="thumb-group-6"><span class="vertical-align"></span></span></span><span class="video-time"><?php if(substr(gmdate("i:s", $video2['duration']), 0, 1) == "0") { echo substr(gmdate("i:s", $video2['duration']), 1); } else { echo gmdate("i:s", $video2['duration']); } ?></span></span>  <button title='Watch Later' onclick=";window.location.href=this.getAttribute('href');return false;" href='/static/module/addtowl.php?v=<?php echo $video2['rid']; ?>' class='addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-hh-default yt-uix-button-short yt-uix-tooltip' type='button' data-video-ids='petKDNDB3DI' data-button-menu-id='shared-addto-watch-later-login' role='button'><span class='yt-uix-button-content'>  <img src='/yts/img/pixel-vfl3z5WfW.gif' alt='Watch Later'>
 </span><img class='yt-uix-button-arrow' src='http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif' alt=''></button>
</a>
    </div>
    <span class="content-item-detail">
      <a href="/watch?v=<?php echo $video2['rid']; ?>" title="<?php echo htmlspecialchars($video2['title']); ?>" class="content-item-title spf-link yt-uix-sessionlink yt-uix-contextlink yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr"><span class="yt-ui-ellipsis-wrapper"><?php echo htmlspecialchars($video2['title']); ?></span></a>
      <span class="content-item-metadata">
          <span class="content-item-view-count"><?php echo $_video_fetch_utils->get_video_views($video2['rid']); ?> views</span>
            <span class="metadata-separator">|</span>
          <span class="content-item-time-created"><?php echo $_video_fetch_utils->time_elapsed_string($video2['publish']); ?></span>
      </span>
    </span>
  </span>
</li>
<?php } ?>
    </ul>
  </div>
</div>
</div>
<link type="text/css" rel="stylesheet" href="/asset/base.css">
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
</style>
<?php
echo "</div></div>";
include("./static/footer.php");
?>