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
    <div style="display: block;height: 47px;display: inline-flex;flex-direction: row;align-content: flex-end;align-items: flex-end;"><a class="channels-tab tab-inactive" href="/channel?n=<?php echo htmlspecialchars($_user['username']); ?>"><img id="tab-home-img" src="/yts/imgbin/homeinactive.png"></a><a class="channels-tab tab-active" href="/channel_videos?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>Videos</p></a><a class="channels-tab tab-inactive" href="/channel_discussion?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>Discussion</p></a><a class="channels-tab tab-inactive" href="/channel_about?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>About</p></a></div>
        </div>

<div class='channelVideos' style="background: #fff;border: 1px solid rgba(0, 0, 0, .098);height: fit-content;display: inline-table;">
                 <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE author = ? ORDER BY id DESC");
                    $stmt->bind_param("s", $_GET['n']);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    if($result->num_rows == 0) {
                        echo "<span style='display: block;text-align: center;font-style: oblique;padding-top: 16;'>This channel has no videos.</span>";
                    }
                    while($video = $result->fetch_assoc()) {
                ?>
<?php 
$publishedReadable3 = date( "F j, Y", strtotime($video['publish']) );
?>


<div class='lohp-shelf-cell-container lohp-category-shelf '>
   <div class='lohp-category-shelf-item-list lohp-shelf-size-1'>
      <div class='lohp-category-shelf-item context-data-item first-shelf-item last-shelf-item'>
         <a href='watch?v=<?php echo $video['rid']; ?>' class='ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto ' data-sessionlink='ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CBMQzx4oAA%3D%3D'><span class='video-thumb ux-thumb yt-thumb-default-165 '><span class='yt-thumb-clip'><span class='yt-thumb-clip-inner'><img data-thumb='/dynamic/thumbs/<?php echo $video['thumbnail']; ?>' onerror=\"this.src='./img/default.png'\" alt='Thumbnail' src='/dynamic/thumbs/<?php echo $video['thumbnail']; ?>' onerror=\"this.src='./thumbs/default.png'\" width='165' data-group-key='thumb-group-0'><span class='vertical-align'></span></span></span><span class="video-time"><?php if(substr(gmdate("i:s", $video['duration']), 0, 1) == "0") { echo substr(gmdate("i:s", $video['duration']), 1); } else { echo gmdate("i:s", $video['duration']); } ?></span></span>  <button title='Watch Later' onclick=";window.location.href=this.getAttribute('href');return false;" href='/static/module/addtowl.php?v=<?php echo $video['rid']; ?>' class='addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-hh-default yt-uix-button-short yt-uix-tooltip' type='button' data-video-ids='petKDNDB3DI' data-button-menu-id='shared-addto-watch-later-login' role='button'><span class='yt-uix-button-content'>  <img src='/yts/img/pixel-vfl3z5WfW.gif' alt='Watch Later'>
 </span><img class='yt-uix-button-arrow' src='http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif' alt=''></button></a>
         <a class='lohp-video-link max-line-2 yt-uix-sessionlink' data-sessionlink='ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CBMQzx4oAA%3D%3D' href='watch?v=<?php echo $video['rid']; ?>' title='<?php echo htmlspecialchars($video['title']); ?>'><?php echo mb_strimwidth(htmlspecialchars(htmlspecialchars($video['title'])), 0, 25, "..."); ?></a>
         <div class='lohp-video-metadata'>
            <span style='color: #555;margin-right: 5px;' class='content-item-view-count'><?php echo $_video_fetch_utils->get_video_views($video['rid']); ?> views</span><span class='content-item-time-created'><?php echo $_video_fetch_utils->time_elapsed_string($video['publish']); ?></span>
         </div>
      </div>
   </div>
</div>
<?php } ?>
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
.lohp-category-shelf-item.context-data-item.first-shelf-item.last-shelf-item {
    margin-top: 16px;
}
.lohp-shelf-cell-container {
    height: 180px;
}
.lohp-shelf-size-1 {
    margin: 16px 0 0 0;
}

.lohp-category-shelf-item.context-data-item.first-shelf-item.last-shelf-item {
    display: contents;
}

.lohp-shelf-cell-container {
    height: fit-content;
    border: none;
}

.channelVideos {
    padding: 0 0 16px 0;
    width: 959px
}

.lohp-category-shelf-item-list {
    padding: 0 0 0 20px;
}
</style>

<?php
echo "</div></div>";
include("./static/footer.php");
?>