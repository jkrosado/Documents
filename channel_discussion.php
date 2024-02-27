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

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if(!isset($_SESSION['siteusername'])){ $error = "you are not logged in"; goto skipcomment; }
        if(!$_POST['comment']){ $error = "your comment cannot be blank"; goto skipcomment; }
        if(strlen($_POST['comment']) > 1000){ $error = "your comment must be shorter than 1000 characters"; goto skipcomment; }
        if(!isset($_POST['g-recaptcha-response'])){ $error = "captcha validation failed"; goto skipcomment; }
        if(!$_user_insert_utils->validateCaptcha($config['recaptcha_secret'], $_POST['g-recaptcha-response'])) { $error = "captcha validation failed"; goto skipcomment; }
        //if(ifBlocked(@$_SESSION['siteusername'], $user['username'], $conn)) { $error = "This user has blocked you!"; goto skipcomment; } 

        $stmt = $conn->prepare("INSERT INTO `comments` (toid, author, comment) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $_GET['n'], $_SESSION['siteusername'], $text);
        $text = $_POST['comment'];
        $stmt->execute();
        $stmt->close();

       
        skipcomment:
    }


    $_user['subscribed'] = $_user_fetch_utils->if_subscribed(@$_SESSION['siteusername'], $_user['username']);
include("./static/header.php");
include("./static/guide.php");
    $id = $_GET["id"];
?>
<div id="content" style="width: 1152px;">
<script src='https://www.google.com/recaptcha/api.js' async defer></script>
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
    <div style="display: block;height: 47px;display: inline-flex;flex-direction: row;align-content: flex-end;align-items: flex-end;"><a class="channels-tab tab-inactive" href="/channel?n=<?php echo htmlspecialchars($_user['username']); ?>"><img id="tab-home-img" src="/yts/imgbin/homeinactive.png"></a><a class="channels-tab tab-inactive" href="/channel_videos?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>Videos</p></a><a class="channels-tab tab-active" href="/channel_discussion?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>Discussion</p></a><a class="channels-tab tab-inactive" href="/channel_about?n=<?php echo htmlspecialchars($_user['username']); ?>"><p>About</p></a></div>
        </div>

<div class='channelAbout' style="background: #fff;border: 1px solid rgba(0, 0, 0, .098);display: flow-root;">
        <div id="watch7-discussion">

        
        <div id="comments-view" data-type="highlights" class="">

          <div class="comments-section" >
      <h4>
        <a class="comments-section-see-all" href="http://web-old.archive.org/web/20121229102009/http://www.youtube.com/all_comments?v=<?php echo $id; ?>">
                <?php 
                    $stmt = $conn->prepare("SELECT * FROM comments WHERE toid = ? ORDER BY id DESC");
                    $stmt->bind_param("s", $_GET['n']);
                    $stmt->execute();
                    $result = $stmt->get_result();
                ?>
              <strong>All Comments</strong> (<?php echo $result->num_rows; ?>)

        </a>
  </h4>


        <div class="comments-post-container clearfix">
        <?php if(!isset($_SESSION['siteusername'])) { ?>
                    <div class="comments-post-alert">
                        <a href="sign_in">Sign in</a> 
                        <span class="comments-post-form-rollover-text">now to post a comment!</span>
                    </div>
                <?php } else if($_video['commenting'] == "d") { ?>
                    <div class="comments-post-alert">
                        <span class="comments-post-form-rollover-text">Comments have been disabled.</span>
                    </div>
                <?php } else { ?>
<form method="post" action="" id="submitform" class="comment-form"><div class="comments-textarea"><img style="width: 50px;height: 50px;" src="/dynamic/pfp/<?php echo $_user_fetch_utils->fetch_user_pfp($_SESSION['siteusername']); ?>"><textarea style="width: 93.5%;" class="comments-textarea" name="comment"></textarea></div>
<div class="watch-comments-options"></div><input type="submit" value="Post" class="g-recaptcha comments-btn watch-btn-primary" data-sitekey="<?php echo $config['recaptcha_sitekey']; ?>" data-callback="onLogin" id="comments-submit"></form>
<?php } ?>
    </div>


        <ul class="comment-list" >
      


  <?php
          
          while($comment = $result->fetch_assoc()) {
$_author = $_user_fetch_utils->fetch_user_username($comment['author']);
if($_author['partner'] == "y") {
    $badge = "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-verified' alt='' title='Verified' data-tooltip-text='Verified'>";
} elseif($_author['partner'] == "d") {
    $badge = "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-disputed' alt='' title='Unofficial Channel' data-tooltip-text='Unofficial Channel'>";
} else {
    $badge = "";
}
  if($_user['username'] == $_SESSION['siteusername']) {
    $deleteBtn = "style='display: inline-block;'";
  } elseif($comment['author'] !== $_SESSION['siteusername']) {
    $deleteBtn = "style='display: none;'";
  } else {
    $deleteBtn = "";
  }

  $commentLikes = $_video_fetch_utils->fetch_comment_likes($comment['id']);
  $commentDislikes = $_video_fetch_utils->fetch_comment_dislikes($comment['id']);
  $commentRating = $commentLikes - $commentDislikes;
  if($commentRating >= 0) {
    $ratingColor = "comments-rating-positive";
  } else {
    $ratingColor = "comments-rating-negative";
  }
        echo "<li class='clearfix comment'
   data-author-id='HTKJiRMV0hk9PY0Wv3aepA'
   data-id='h9CSjLt9ZEIT-zAOha0TluW8PrpNyT9KPC0w84grC1w'
   >
         <button onclick=';return false;' type='button' class='flip close yt-uix-button yt-uix-button-link yt-uix-button-empty' data-button-has-sibling-menu='true' role='button' aria-pressed='false' aria-expanded='false' aria-haspopup='true' aria-activedescendant='' " . $deleteBtn . ">
      <span class='yt-uix-button-icon-wrapper'><img class='yt-uix-button-icon yt-uix-button-icon-comment-close' src='/yts/img/pixel-vfl3z5WfW.gif' alt=''></span><img class='yt-uix-button-arrow' src='/yts/img/pixel-vfl3z5WfW.gif' alt=''>
      <div class=' yt-uix-button-menu yt-uix-button-menu-link' style='display: none;'>
         <ul>
            <li class='comment-action-remove comment-action' data-action='remove' style='display: list-item;'><span onclick=';window.location.href=this.getAttribute(`href`);return false;' href='/static/module/rmchannelcomment?id=" . $comment['id'] . "' class='yt-uix-button-menu-item'>Delete</span></li>
         </ul>
      </div>
   </button>
   <a href='/channel?n=".$comment['author']."' class='yt-user-photo ' ><span class='video-thumb ux-thumb yt-thumb-square-48 '><span class='yt-thumb-clip'><span class='yt-thumb-clip-inner'><img alt='pfp' data-thumb='http://fulptube.rocks/dynamic/pfp/default.png' src='/dynamic/pfp/".$_user_fetch_utils->fetch_user_pfp($comment['author'])."' width='48' ><span class='vertical-align'></span></span></span></span></a>
   <div class='comment-body'>
      <div class='content-container'>
         <div class='content'>
            <p class='metadata'>
               <span class='author ' style='padding-right: 0px!important;'>
               <a href='/channel?n=".htmlspecialchars($comment['author'])."' class='yt-uix-sessionlink yt-user-name ' data-sessionlink='ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D' dir='ltr'>".htmlspecialchars($comment['author'])."</a>
               </span>".$badge."
               <span class='time' dir='ltr'>
               <a dir='ltr' href='#'>
               ". $_video_fetch_utils->time_elapsed_string($comment['date'])."
               </a>
               </span>
            </p>
            <div class='comment-text' dir='ltr'>
               <p>".nl2br(htmlspecialchars($comment['comment']))."</p>
            </div>
         </div>
         <div class='comment-actions'>
            <button onclick=';return false;' type='button' class='start comment-action yt-uix-button yt-uix-button-link' data-action='reply' role='button'><span class='yt-uix-button-content'>Reply </span></button>
            <span class='separator'>&middot;</span><span class='" . $ratingColor . "'>".$commentRating."</span>
            <span class='yt-uix-button-group ".$_video_fetch_utils->fetch_user_liked($comment['id'], $_SESSION['siteusername'])."".$_video_fetch_utils->fetch_user_disliked($comment['id'], $_SESSION['siteusername'])."'>
               <span class='yt-uix-clickcard'>
                  <a title='' href='/get/like_comment?id=".$comment['id']."' type='button' class='start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty' data-tooltip-show-delay='300' data-action='' role='button'><span class='yt-uix-button-icon-wrapper'><img class='yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up' src='http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif' alt=''><span class='yt-uix-button-valign'></span></span></a>
                  <div class='watch7-hovercard yt-uix-clickcard-content'>
                     <h3 class='watch7-hovercard-header'>Sign in to YouTube</h3>
                     <div class='watch7-hovercard-message'>
                        Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class='yt-user-name ' dir='ltr'>RyanDo2000</span>'s comment.
                     </div>
                     <ul class='watch7-hovercard-icon-strip clearfix'>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-youtube-icon'></div>
                        </li>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-gplus-icon'></div>
                        </li>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-gmail-icon'></div>
                        </li>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-picasa-icon'></div>
                        </li>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-chrome-icon'></div>
                        </li>
                     </ul>
                     <div class='watch7-hovercard-account-line'>
                        <a href='http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo $id; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3' class='yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary' data-sessionlink='ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D'><span class='yt-uix-button-content'>Sign in</span></a>
                     </div>
                  </div>
               </span>
               <span class='yt-uix-clickcard'>
                  <a title='' href='/get/dislike_comment?id=".$comment['id']."' type='button' class='end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty' data-tooltip-show-delay='300' data-action='' role='button'><span class='yt-uix-button-icon-wrapper'><img class='yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down' src='http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif' alt=''><span class='yt-uix-button-valign'></span></span></a>
                  <div class='watch7-hovercard yt-uix-clickcard-content'>
                     <h3 class='watch7-hovercard-header'>Sign in to YouTube</h3>
                     <div class='watch7-hovercard-message'>
                        Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class='yt-user-name ' dir='ltr'>RyanDo2000</span>'s comment.
                     </div>
                     <ul class='watch7-hovercard-icon-strip clearfix'>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-youtube-icon'></div>
                        </li>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-gplus-icon'></div>
                        </li>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-gmail-icon'></div>
                        </li>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-picasa-icon'></div>
                        </li>
                        <li class='watch7-hovercard-icon'>
                           <div class='watch7-hovercard-chrome-icon'></div>
                        </li>
                     </ul>
                     <div class='watch7-hovercard-account-line'>
                        <a href='http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo $id; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3' class='yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary' data-sessionlink='ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D'><span class='yt-uix-button-content'>Sign in</span></a>
                     </div>
                  </div>
               </span>
            </span>
         </div>
      </div>
   </div>
</li>";
}?>

  </ul>

  </div>








      <ul>
    <li class="hid" id="parent-comment-loading"> Loading comment...</li>
  </ul>

    <div id="comments-loading" class="hid">Loading...</div>
  </div>


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
<script>function onLogin(token){ document.getElementById('submitform').submit(); }</script>
<script src='https://www.google.com/recaptcha/api.js' async defer></script>
<?php
echo "</div></div>";
include("./static/footer.php");
?>