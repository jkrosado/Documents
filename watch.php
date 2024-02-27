<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/update.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); ?>
<?php
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
    
    include("./static/header.php");   

    if(!$_video_fetch_utils->video_exists($_GET['v'])) {
        echo "<div id='player' style='
   padding-left: 58px;
   color: white;
   margin-top: 12px;
   '>
   <div style='
      width: 640px;
      height: 390px;
      text-align: left;
      float: left;
      background: #262626;
      position: relative;
      text-align: left;
      font-size: 13px;
      line-height: 1.2;
      background-image: linear-gradient(to bottom,#383838 0,#131313 100%);
      '>
      <img class='icon meh' src='http://s.ytimg.com/yts/img/meh7-vflGevej7.png' alt='' style='
         position: absolute;
         width: 140px;
         height: 100px;
         left: 50%;
         top: 60%;
         margin-left: -70px;
         margin-top: -50px;
         '>
      <div style='
         position: absolute;
         top: 25px;
         left: 25px;
         bottom: 50px;
         right: 25px;
         ' class='content'>
         <h1 style='
            margin: 0 -5px 15px;
            padding: 0 5px 14px;
            border-bottom: 1px solid #888;
            font-size: 19px;
            font-weight: normal;
            text-shadow: 0 2px 2px #000;
            '>
            This video doesn't exist.
         </h1>
         <div style='
            text-shadow: 0 1px 1px #000;
            '>
            Sorry about that.
         </div>
      </div>
   </div>
   <div class='clear'></div>
</div>";
	die();
    }

    if(!isset($_GET['v'])) {
        echo "<div id='player' style='
   padding-left: 58px;
   color: white;
   margin-top: 12px;
   '>
   <div style='
      width: 640px;
      height: 390px;
      text-align: left;
      float: left;
      background: #262626;
      position: relative;
      text-align: left;
      font-size: 13px;
      line-height: 1.2;
      background-image: linear-gradient(to bottom,#383838 0,#131313 100%);
      '>
      <img class='icon meh' src='http://s.ytimg.com/yts/img/meh7-vflGevej7.png' alt='' style='
         position: absolute;
         width: 140px;
         height: 100px;
         left: 50%;
         top: 60%;
         margin-left: -70px;
         margin-top: -50px;
         '>
      <div style='
         position: absolute;
         top: 25px;
         left: 25px;
         bottom: 50px;
         right: 25px;
         ' class='content'>
         <h1 style='
            margin: 0 -5px 15px;
            padding: 0 5px 14px;
            border-bottom: 1px solid #888;
            font-size: 19px;
            font-weight: normal;
            text-shadow: 0 2px 2px #000;
            '>
            Invalid URL.
         </h1>
         <div style='
            text-shadow: 0 1px 1px #000;
            '>
            Sorry about that.
         </div>
      </div>
   </div>
   <div class='clear'></div>
</div>";
	die();
    }
    
    $_video = $_video_fetch_utils->fetch_video_rid($_GET['v']);
    $_user = $_user_fetch_utils->fetch_user_username($_video['author']);
    $_video['liked'] = $_user_fetch_utils->if_liked_video(@$_SESSION['siteusername'], $_video['rid']);
    $_video['disliked'] = $_user_fetch_utils->if_disliked_video(@$_SESSION['siteusername'], $_video['rid']);
    $_video['subscribed'] = $_user_fetch_utils->if_subscribed(@$_SESSION['siteusername'], $_video['author']);
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if(!isset($_SESSION['siteusername'])){ $error = "you are not logged in"; goto skipcomment; }
        if(!$_POST['comment']){ $error = "your comment cannot be blank"; goto skipcomment; }
        if(strlen($_POST['comment']) > 1000){ $error = "your comment must be shorter than 1000 characters"; goto skipcomment; }
        if(!isset($_POST['g-recaptcha-response'])){ $error = "captcha validation failed"; goto skipcomment; }
        if(!$_user_insert_utils->validateCaptcha($config['recaptcha_secret'], $_POST['g-recaptcha-response'])) { $error = "captcha validation failed"; goto skipcomment; }
        //if(ifBlocked(@$_SESSION['siteusername'], $user['username'], $conn)) { $error = "This user has blocked you!"; goto skipcomment; } 

        $stmt = $conn->prepare("INSERT INTO `comments` (toid, author, comment) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $_GET['v'], $_SESSION['siteusername'], $text);
        $text = $_POST['comment'];
        $stmt->execute();
        $stmt->close();

        $_user_insert_utils->send_message($_video['author'], "New comment", 'I commented "' . $_POST['comment'] . '" on your video "' . $_video['title'] . '"', $_SESSION['siteusername']);
        skipcomment:
    }

function getViewTarget() {
    if(isset($_SESSION['siteusername'])) {
        $target = $_SESSION['siteusername'];
    } else {
        $ipHash = password_hash($_SERVER["HTTP_CF_CONNECTING_IP"], PASSWORD_DEFAULT);
        $target = "user_loggedout";
    }
    return $target;
}

if($_video_fetch_utils->video_exists($_GET['v'])) {
    $_video_insert_utils->check_view($_GET['v'], getViewTarget());
        if(isset($_SESSION['siteusername'])) {
        $_video_insert_utils->add_to_history($_GET['v'], @$_SESSION['siteusername']);
    }
}
?>
<?php
/*include("./static/header.php");*/
$id = $_GET["v"];

// this is the main video information, such as the video url itself, video name, this is api-less.
parse_str(@file_get_contents("http://youtube.com/get_video_info?video_id=".$id."&type=rtmp/flv&itag=35"), $info); //decode the data

include("./static/guide.php");
$video_title = $_video['title'];
$video_author = htmlspecialchars($_video['author']);
$channel_id = $_video['author'];
$video = urlencode("https://frogtube.cf/dynamic/videos/MTYzMDcyMDMzNjg30.mp4");


// this gets the user info, such as subscribers and video count

          


// main video info, gets the description, date
          


// remaining video info, such as comment count, view count, etc...
          

$totalCount = $_video_fetch_utils->get_video_likes($_GET['v']) + $_video_fetch_utils->get_video_dislikes($_GET['v']) // for the ratio bar to compare likes to dislikes
?>

<!--- <script>alert("<?php echo $totalCount ?>");</script> --->

<html lang="en"><head>
<link type="text/css" rel="stylesheet" href="/static/css/banner-styles.css"/>
<!-- End Wayback Rewrite JS Include -->


    <meta name="description" content="http://www.facebook.com/rickroll548 http://www.reddit.com/user/Rettocs/ &quot;It&#39;s the end of the world, and we know it!&quot;">

    <meta name="keywords" content="Cotter548, Shawn, Cotter, lol, gamefaqs, CE, reddit, rettocs, no, brb, afk, lawl, pwnt, Rickroll, Rickroll&#39;d, Rick, Roll, Duckroll, Duck, rick, roll, astley,...">

    <link rel="alternate" type="application/json+oembed" href="http://www.youtube.com/oembed?format=json&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D<?php echo $id; ?>" title="<?php echo $video_title; ?>">
  <link rel="alternate" type="text/xml+oembed" href="http://www.youtube.com/oembed?format=xml&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D<?php echo $id; ?>" title="<?php echo $video_title; ?>">

      <meta property="og:url" content="http://www.youtube.com/watch?v=<?php echo $id; ?>">
    <meta property="og:title" content="<?php echo $video_title; ?>">
    <meta property="og:description" content="http://www.facebook.com/rickroll548 http://www.reddit.com/user/Rettocs/ &quot;It&#39;s the end of the world, and we know it!&quot;">
    <meta property="og:type" content="video">
    <meta property="og:image" content="http://i4.ytimg.com/vi/<?php echo $id; ?>/mqdefault.jpg">
      <meta property="og:video" content="http://www.youtube.com/v/<?php echo $id; ?>?autohide=1&amp;version=3">
      <meta property="og:video:type" content="application/x-shockwave-flash">
      <meta property="og:video:width" content="480">
      <meta property="og:video:height" content="360">
    <meta property="og:site_name" content="YouTube">
    <meta property="fb:app_id" content="87741124305">
    <meta name="twitter:card" value="player">
    <meta name="twitter:site" value="@youtube">
      <meta name="twitter:player" value="https://www.youtube.com/embed/<?php echo $id; ?>">
      <meta property="twitter:player:width" content="480">
      <meta property="twitter:player:height" content="360">
    <script src='https://www.google.com/recaptcha/api.js' async defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>function onLogin(token){ document.getElementById('submitform').submit(); }</script>
<title><?php echo htmlspecialchars($_video['title']) ?> - FulpTube</title>

  
  <link id="css-2783428260" rel="stylesheet" href="./2012l_asset/www-hitchhiker-vfl_sDVM_.css">
    
<style></style></head>
<div id="content" >  <div id="watch7-container" class="  transition-content  " itemscope itemid="" itemtype="http://schema.org/VideoObject">
        <link itemprop="url" href="http://www.youtube.com/watch?v=<?php echo $id; ?>">
    <meta itemprop="name" content="<?php echo $video_title; ?>">
    <meta itemprop="description" content="http://www.facebook.com/rickroll548 http://www.reddit.com/user/Rettocs/ &quot;It&#39;s the end of the world, and we know it!&quot;">
    <meta itemprop="duration" content="PT3M32S">
    <meta itemprop="unlisted" content="False">
    <meta itemprop="paid" content="False">
      <span itemprop="author" itemscope itemtype="http://schema.org/Person">
        <link itemprop="url" href="http://www.youtube.com/user/<?php echo $video_author; ?>">
      </span>
    <link itemprop="thumbnailUrl" href="http://i4.ytimg.com/vi/<?php echo $id; ?>/hqdefault.jpg">
    <span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject">
      <link itemprop="url" href="http://i4.ytimg.com/vi/<?php echo $id; ?>/mqdefault.jpg">
      <meta itemprop="width" content="320">
      <meta itemprop="height" content="180">
    </span>
      <link itemprop="embedURL" href="http://www.youtube.com/v/<?php echo $id; ?>?autohide=1&amp;version=3">
      <meta itemprop="playerType" content="Flash">
      <meta itemprop="width" content="480">
      <meta itemprop="height" content="360">
      <meta itemprop="isFamilyFriendly" content="True">
      <meta itemprop="regionsAllowed" content="AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH,ER,ES,ET,FI,FJ,FK,FM,FO,FR,GA,GD,GE,GF,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,HU,ID,IE,IL,IN,IO,IQ,IR,IS,IT,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,PR,PS,PT,PW,PY,QA,RE,RO,RS,RU,RW,SA,SB,SC,SD,SE,SG,SH,SI,SJ,SK,SL,SM,SN,SO,SR,SS,ST,SV,SX,SY,SZ,TC,TD,TF,TG,TH,TJ,TK,TL,TM,TN,TO,TR,TT,TV,TW,TZ,UA,UG,UM,US,UY,UZ,VA,VC,VE,VG,VI,VN,VU,WF,WS,YE,YT,ZA,ZM,ZW">




    <div id="watch7-video-container">
      <div id="watch7-video" style="height: 390px; width: 640px;">
    <?php require($_SERVER['DOCUMENT_ROOT'] . "/watchplr.php"); ?>

        
      </div>
    </div>

    <div id="watch7-main-container">
      <div id="watch7-main" class="clearfix">
        <div id="watch7-content">
            <div class="yt-uix-button-panel">
      <div id="watch7-headline" class="clearfix  yt-uix-expander yt-uix-expander-collapsed">
    <h1 id="watch-headline-title">
      

  


  <span  class=" yt-uix-expander-head" dir="ltr" title="<?php echo $video_title; ?>">
    <?php echo $video_title; ?>
  </span>

    </h1>
  </div>

    <div id="watch7-user-header" ><a href="/channel?n=<?php echo $channel_id; ?>" class="yt-user-photo " ><span class="video-thumb ux-thumb yt-thumb-square-48 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="<?php echo $video_author; ?>" src="/dynamic/pfp/<?php echo $_user_fetch_utils->fetch_user_pfp($_video['author']); ?>" width="48" ><span class="vertical-align"></span></span></span></span></a><a href="/channel?n=<?php echo $channel_id; ?>" class="yt-uix-sessionlink yt-user-name " data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D&amp;feature=watch" dir="ltr"><?php echo $video_author; ?></a><?php
if($_user['partner'] == "y") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-verified' alt='' title='Verified' data-tooltip-text='Verified'>";
}
?><?php
if($_user['partner'] == "d") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-disputed' alt='' title='Unofficial Channel' data-tooltip-text='Unofficial Channel'>";
}
?><span class="yt-user-separator">&middot;</span><a class="yt-uix-sessionlink yt-user-videos"href="/channel_videos?n=<?php echo $video_author; ?>"data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D&amp;feature=watch"><?php echo $_video_fetch_utils->fetch_videos_from_user($_video['author']); ?> videos</a><br><span class="yt-uix-button-subscription-container yt-uix-button-context-light"><button onclick=";window.location.href=this.getAttribute('href');return false;" href="/get/<?php if($_video['subscribed']) { echo "un"; } ?>subscribe?n=<?php echo htmlspecialchars($_video['author']); ?>" class="yt-subscription-button yt-subscription-button-js-default None  yt-uix-button <?php if($_video['subscribed']) { echo "yt-uix-button-subscribed-branded"; } else { echo "yt-uix-button-subscribe-branded"; } ?>" type="button" data-subscription-button-type="branded" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D&amp;feature=watch" data-subscription-value="UCxnNQpMtVrZRZh3aOkmnK4w" data-subscription-type="" data-subscription-feature="watch" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe-branded" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">  <span class="subscribe-hh-label">Subscribe</span>
  <span class="subscribed-hh-label">Subscribed</span>
  <span class="unsubscribe-hh-label">Unsubscribe</span>
 </span></button><span class="yt-subscription-button-subscriber-count-branded-horizontal"><?php echo $_user_fetch_utils->fetch_subs_count($_video['author']); ?></span><span class="yt-subscription-button-disabled-mask"></span></span><div id="watch7-views-info">  <span class="watch-view-count">
      <?php echo $_video_fetch_utils->fetch_video_views($_video['rid']); ?>
  </span>
    <div class="video-extras-sparkbars">
    <div class="video-extras-sparkbar-likes" style="width: <?php echo get_percentage($totalCount, $_video_fetch_utils->get_video_likes($_GET['v']) ); ?>%"></div>
    <div class="video-extras-sparkbar-dislikes" style="width: <?php echo get_percentage($totalCount, $_video_fetch_utils->get_video_dislikes($_GET['v']) ); ?>%"></div>
  </div>
  <span class="video-extras-likes-dislikes">
      <img class="icon-watch-stats-like" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Like"> <?php echo $_video_fetch_utils->get_video_likes($_GET['v']); ?>
 &nbsp;&nbsp;&nbsp;   <img class="icon-watch-stats-dislike" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Dislike"> <?php echo $_video_fetch_utils->get_video_dislikes($_GET['v']); ?>

  </span>

</div></div>
      <div id="watch7-action-buttons" class="clearfix">
    <div id="watch7-sentiment-actions">
      <span id="watch-like-dislike-buttons" class="yt-uix-button-group " data-vote-state="2" data-button-toggle-group="optional"><span class="yt-uix-clickcard"><a data-tooltip-text="I like this" title="" href="/get/like?v=<?php echo htmlspecialchars($_GET['v']); ?>" id="watch-like" class="yt-uix-clickcard-target yt-uix-button yt-uix-button-hh-text yt-uix-tooltip <?php if($_video['liked']) { echo "yt-uix-button-toggled"; } ?>" type="button" data-position="bottomright" data-like-tooltip="I like this" data-button-toggle="true" data-unlike-tooltip="Unlike" data-orientation="vertical" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-like" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">Like</span></button>  <div class="watch7-hovercard yt-uix-clickcard-content">
    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>
    <div class="watch7-hovercard-message">
      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to like <span class="yt-user-name " dir="ltr"><?php echo $video_author; ?></span>'s video.

    </div>
    <ul class="watch7-hovercard-icon-strip clearfix">
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-youtube-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gplus-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gmail-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-picasa-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-chrome-icon"></div>
      </li>
    </ul>
    <div class="watch7-hovercard-account-line">
      <a href="http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo $id; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D"><span class="yt-uix-button-content">Sign in</span></a>
    </div>
  </div>
</span><span class="yt-uix-clickcard"><a title="I dislike this" href="/get/dislike?v=<?php echo htmlspecialchars($_GET['v']); ?>" id="watch-dislike" class="yt-uix-clickcard-target yt-uix-button yt-uix-button-hh-text yt-uix-tooltip yt-uix-button-empty <?php if($_video['disliked']) { echo "yt-uix-button-toggled"; } ?>" type="button" data-position="bottomright" data-button-toggle="true" data-orientation="vertical" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-dislike" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="I dislike this"><span class="yt-uix-button-valign"></span></span></button>  <div class="watch7-hovercard yt-uix-clickcard-content">
    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>
    <div class="watch7-hovercard-message">
      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to dislike <span class="yt-user-name " dir="ltr"><?php echo $video_author; ?></span>'s video.

    </div>
    <ul class="watch7-hovercard-icon-strip clearfix">
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-youtube-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gplus-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gmail-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-picasa-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-chrome-icon"></div>
      </li>
    </ul>
    <div class="watch7-hovercard-account-line">
      <a href="http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo $id; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D"><span class="yt-uix-button-content">Sign in</span></a>
    </div>
  </div>
</span></span>
    </div>
    <div id="watch7-secondary-actions"  class="yt-uix-button-group" data-button-toggle-group="required">
        <span >
    <button title="" onclick=";return false;" type="button" class="action-panel-trigger  yt-uix-button-toggled yt-uix-button yt-uix-button-hh-text yt-uix-tooltip" data-button-toggle="true" data-trigger-for="action-panel-details" role="button"><span class="yt-uix-button-content">About </span></button>
  </span>

        <span >
    <button title="" onclick=";return false;" type="button" class="action-panel-trigger   yt-uix-button yt-uix-button-hh-text yt-uix-tooltip" data-button-toggle="true" data-trigger-for="action-panel-share" role="button"><span class="yt-uix-button-content">Share </span></button>
  </span>

          <span class="yt-uix-clickcard">
    <button title="" onclick=";return false;" type="button" class="action-panel-trigger   yt-uix-clickcard-target yt-uix-button yt-uix-button-hh-text yt-uix-tooltip" data-position="bottomleft" data-button-toggle="true" data-upsell="playlist" data-orientation="vertical" data-trigger-for="action-panel-none" role="button"><span class="yt-uix-button-content">Add to </span></button>
        <div class="watch7-hovercard yt-uix-clickcard-content">
    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>
    <div class="watch7-hovercard-message">
      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to add <span class="yt-user-name " dir="ltr"><?php echo $video_author; ?></span>'s video to your playlist.

    </div>
    <ul class="watch7-hovercard-icon-strip clearfix">
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-youtube-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gplus-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gmail-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-picasa-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-chrome-icon"></div>
      </li>
    </ul>
    <div class="watch7-hovercard-account-line">
      <a href="http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo $id; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D"><span class="yt-uix-button-content">Sign in</span></a>
    </div>
  </div>

  </span>

        <span >
    <button title="Statistics" onclick=";return false;" type="button" class="action-panel-trigger   yt-uix-button yt-uix-button-hh-text yt-uix-tooltip yt-uix-button-empty" data-button-toggle="true" data-trigger-for="action-panel-stats" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-action-panel-stats" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Statistics"><span class="yt-uix-button-valign"></span></span></button>
  </span>

        <span >
    <button title="Report" onclick=";return false;" type="button" class="action-panel-trigger   yt-uix-button yt-uix-button-hh-text yt-uix-tooltip yt-uix-button-empty" data-button-toggle="true" data-trigger-for="action-panel-report" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-action-panel-report" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Report"><span class="yt-uix-button-valign"></span></span></button>
  </span>

    </div>
  </div>

      <div id="watch7-action-panels" class="yt-uix-button-panel">
      <div id="action-panel-details" class="action-panel-content">
    <div id="watch-description" class="yt-uix-expander yt-uix-expander-collapsed yt-uix-button-panel" data-expander-action="yt.www.watch7.handleDescriptionToggle">
      <div id="watch-description-content" >
        <div id="watch-description-clip">
          <p id="watch-uploader-info">
            <strong>Uploaded on <span id="eow-date" class="watch-video-date" ><?php echo date("M d, Y", strtotime($_video['publish'])); ?></span>
</strong>
          </p>
          <div id="watch-description-text">
            <p id="eow-description" >
            <?php echo nl2br($_video['description']); ?>
            </p>
          </div>
            <div id="watch-description-extras">
    <ul class="watch-extras-section">
      <li>
        <h4 class="title">
Category
        </h4>
        <div class="content">
              <p id="eow-category"><a href="http://web-old.archive.org/web/20121229102009/http://www.youtube.com/music">Music</a></p>

        </div>
      </li>


        <li>
          <h4 class="title">License</h4>
          <div class="content">
              <p id="eow-reuse">
Standard YouTube License
  </p>

          </li>
        </li>
    </ul>
  </div>

        </div>
        <ul id="watch-description-extra-info">
          
        </ul>
      </div>

      <div id="watch-description-toggle" class="yt-uix-expander-head yt-uix-button-panel">
        <div id="watch-description-expand" class="expand">
          <button onclick=";return false;" type="button" class="metadata-inline yt-uix-button yt-uix-button-hh-text"  role="button"><span class="yt-uix-button-content">Show more </span></button>
        </div>
        <div id="watch-description-collapse" class="collapse">
          <button onclick=";return false;" type="button" class="metadata-inline yt-uix-button yt-uix-button-hh-text"  role="button"><span class="yt-uix-button-content">Show less </span></button>
        </div>
      </div>
    </div>
  </div>

      <div id="action-panel-share" class="action-panel-content hid">
      <div id="watch-actions-share-loading">
    <div class="action-panel-loading">
        <p class="yt-spinner">
      <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">

Loading...
  </p>

    </div>
  </div>
  <div id="watch-actions-share-panel"></div>

  </div>

      <div id="action-panel-addto" class="action-panel-content hid" data-auth-required="true">
    <div class="action-panel-loading">
        <p class="yt-spinner">
      <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">

Loading...
  </p>

    </div>
  </div>

      <div id="action-panel-stats" class="action-panel-content hid">
    <div class="action-panel-loading">
        <p class="yt-spinner">
      <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">

Loading...
  </p>

    </div>
  </div>

      <div id="action-panel-report" class="action-panel-content hid" data-auth-required="true">
    <div class="action-panel-loading">
        <p class="yt-spinner">
      <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon">

Loading...
  </p>

    </div>
  </div>

      <div id="action-panel-login" class="action-panel-content hid">
    <div class="action-panel-login">
      <a href="http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo $id; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-default" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D"><span class="yt-uix-button-content">Sign in</span></a>
      <a href="http://web-old.archive.org/web/20121229102009/http://www.youtube.com/signup?next=%2Fwatch%3Fv%3D<?php echo $id; ?>" class="yt-uix-button-alert-link">Sign up</a>
    </div>
  </div>

  <div id="action-panel-ratings-disabled" class="action-panel-content hid">
      <div id="watch-actions-ratings-disabled" class="watch-actions-panel hid">
    <em>Ratings have been disabled for this video.</em>
  </div>

  </div>

  <div id="action-panel-rental-required" class="action-panel-content hid">
      <div id="watch-actions-rental-required" class="watch-actions-panel hid">
    <strong>Rating is available when the video has been rented.</strong>
  </div>

  </div>

  <div id="action-panel-error" class="action-panel-content hid">
    <div class="action-panel-error">
      This feature is not available right now. Please try again later.
    </div>
  </div>

    <div id="watch7-action-panel-footer">
        <hr class="yt-horizontal-rule ">

    </div>
  </div>

  </div>
    <div id="watch7-discussion">

        
        <div id="comments-view" data-type="highlights" class="">

          <div class="comments-section" >
      <h4>
        <a class="comments-section-see-all" href="http://web-old.archive.org/web/20121229102009/http://www.youtube.com/all_comments?v=<?php echo $id; ?>">
                <?php 
                    $stmt = $conn->prepare("SELECT * FROM comments WHERE toid = ? ORDER BY id DESC");
                    $stmt->bind_param("s", $_GET['v']);
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
<form method="post" action="" id="submitform" class="comment-form"><div class="comments-textarea"><img style="width: 50px;height: 50px;" src="/dynamic/pfp/<?php echo $_user_fetch_utils->fetch_user_pfp($_SESSION['siteusername']); ?>"><textarea class="comments-textarea" name="comment"></textarea></div>
<div class="watch-comments-options"></div><input type="submit" value="Post" class="g-recaptcha comments-btn watch-btn-primary" data-sitekey="<?php echo $config['recaptcha_sitekey']; ?>" data-callback="onLogin" id="comments-submit"></form>
<?php } ?>
    </div>


        <ul class="comment-list" >
      


  <?php
          
          while($comment = $result->fetch_assoc()) {
$_user = $_user_fetch_utils->fetch_user_username($comment['author']);
if($_author['partner'] == "y") {
    $badge = "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-verified' alt='' title='Verified' data-tooltip-text='Verified'>";
} elseif($_author['partner'] == "d") {
    $badge = "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-disputed' alt='' title='Unofficial Channel' data-tooltip-text='Unofficial Channel'>";
} else {
    $badge = "";
}
  if($_video['author'] == $_SESSION['siteusername']) {
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
            <li class='comment-action-remove comment-action' data-action='remove' style='display: list-item;'><span onclick=';window.location.href=this.getAttribute(`href`);return false;' href='/static/module/rmvidcomment?id=" . $comment['id'] . "' class='yt-uix-button-menu-item'>Delete</span></li>
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
            <span class='yt-uix-button-group ".$_video_fetch_utils->fetch_user_liked($comment['id'], $_SESSION['siteusername'])." ".$_video_fetch_utils->fetch_user_disliked($comment['id'], $_SESSION['siteusername'])."'>
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


<?php
/*

          <div class="comments-section">
      <div class="comments-pagination" data-ajax-enabled="true">
          

    <div class="yt-uix-pager" role="navigation">

        
<a href="http://web-old.archive.org/web/20121229102009/http://www.youtube.com/all_comments?v=<?php echo $id; ?>&amp;page=2" class="yt-uix-button  yt-uix-pager-button yt-uix-pager-show-more yt-uix-sessionlink yt-uix-button-hh-default" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D" data-page="2"><span class="yt-uix-button-content">Show more</span></a>
    </div>

      </div>
  </div>

*/
?>

      <ul>
    <li class="hid" id="parent-comment-loading"> Loading comment...</li>
  </ul>

    <div id="comments-loading" class="hid">Loading...</div>
  </div>


  </div>


        </div>
        <div id="watch7-sidebar">
          



      
  <div class="watch-sidebar-section">
    <div class="watch-sidebar-body">
      <ul id="watch-related" class="video-list">
          <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos ORDER BY publish DESC LIMIT 20");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?> <li class='video-list-item'>
<?php
$vidDur = gmdate("i:s", $video['duration']);
if(substr($vidDur, 0, 1) == "0") {
    $vidStmp = substr($vidDur, 1);
} else {
    $vidStmp = $vidDur;
}
?>
            <a href='watch?v=<?php echo $video['rid']; ?>' class='related-video yt-uix-contextlink  related-video-featured hid yt-uix-sessionlink' data-sessionlink='ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D&amp;feature=fvwrel&amp;ved=CAMQzRooAA%3D%3D'><span class='ux-thumb-wrap contains-addto '><span class='video-thumb ux-thumb yt-thumb-default-120 '><span class='yt-thumb-clip'><span class='yt-thumb-clip-inner'><img alt='<?php echo $video['title']; ?>' data-thumb='/dynamic/thumbs/<?php echo $video['thumbnail']; ?>' src='/dynamic/thumbs/<?php echo $video['thumbnail']; ?>' width='120' ><span class='vertical-align'></span></span></span><span class="video-time"><?php echo $vidStmp; ?></span></span>
  <button title='Watch Later' onclick=";window.location.href=this.getAttribute('href');return false;" href='/static/module/addtowl.php?v=<?php echo $video['rid']; ?>' class='addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-hh-default yt-uix-button-short yt-uix-tooltip' type='button' data-video-ids='petKDNDB3DI' data-button-menu-id='shared-addto-watch-later-login' role='button'><span class='yt-uix-button-content'>  <img src='/yts/img/pixel-vfl3z5WfW.gif' alt='Watch Later'>
 </span><img class='yt-uix-button-arrow' src='http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif' alt=''></button>
</span><span dir='ltr' class='title' title='<?php echo $video['title']; ?>'><?php echo htmlspecialchars($video['title']); ?></span><span class='stat attribution'>by <span class='yt-user-name ' dir='ltr'><b><?php echo htmlspecialchars($video['author']); ?></b><?php
$_user = $_user_fetch_utils->fetch_user_username($video['author']);
if($_user['partner'] == "y") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-verified' alt='' title='Verified' data-tooltip-text='Verified'>";
}
?><?php
if($_user['partner'] == "d") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-disputed' alt='' title='Unofficial Channel' data-tooltip-text='Unofficial Channel'>";
}
?></span></span><span class='stat alt badge'></span><span class='stat view-count'></span></a>
          </li>
         <?php } ?>
      </ul>
        <ul id="watch-more-related" class="video-list hid">
          <li id="watch-more-related-loading">
Loading more suggestions...
          </li>
        </ul>
    </div>       <div class="watch-sidebar-foot">
        <button onclick=";return false;" id="watch-more-related-button" type="button" class=" yt-uix-button yt-uix-button-hh-default" data-button-action="yt.www.watch7.handleLoadMoreRelated" role="button"><span class="yt-uix-button-content">Load more suggestions </span></button>
      </div>
  </div>

        </div>
      </div>
    </div>

      <div style="visibility: hidden; height: 0px; padding: 0px; overflow: hidden;">

  </div>

  </div>
</div></div></div></div>

      <div class="yt-dialog hid" id="feed-privacy-lb">
    <div class="yt-dialog-base">
      <span class="yt-dialog-align"></span>
      <div class="yt-dialog-fg">
        <div class="yt-dialog-fg-content">
          <div class="yt-dialog-loading">
              <div class="yt-dialog-waiting-content">
    <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Loading...</div>
  </div>

          </div>
          <div class="yt-dialog-content">
              <div id="feed-privacy-dialog">
  </div>

          </div>
          <div class="yt-dialog-working">
              <div id="yt-dialog-working-overlay">
  </div>
  <div id="yt-dialog-working-bubble">
    <div class="yt-dialog-waiting-content">
      <div class="yt-spinner-img"></div><div class="yt-dialog-waiting-text">Working...</div>
    </div>
  </div>

          </div>
        </div>
      </div>
    </div>
  </div>



    <div id="shared-addto-watch-later-login" class="hid">
      <a href="http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3Dplaylist%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo $id; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3" class="sign-in-link">Sign in</a> to add this to a playlist

    </div>

  <div id="shared-addto-menu" style="display: none;" class="hid sign-in">
      <div class="addto-menu">
        <div id="addto-list-panel" class="menu-panel active-panel">
        <span class="yt-uix-button-menu-item yt-uix-tooltip sign-in"data-possible-tooltip=""data-tooltip-show-delay="750"><a href="http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3Dplaylist%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo $id; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3" class="sign-in-link">Sign in</a> to add this to a playlist
</span>

  </div>
  <div id="addto-list-saved-panel" class="menu-panel">
    <div class="panel-content">
      <div class="yt-alert yt-alert-naked yt-alert-success  ">  <div class="yt-alert-icon">
    <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
            
  <span class="message">Added to <span class="addto-title yt-uix-tooltip yt-uix-tooltip-reverse" title="More information about this playlist" data-tooltip-show-delay="750"></span></span>

    </div>
</div></div>
    </div>
  </div>
  <div id="addto-list-error-panel" class="menu-panel">
    <div class="panel-content">
      <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
      <span class="error-details"></span>
      <a class="show-menu-link">Back to list</a>
    </div>
  </div>

        <div id="addto-note-input-panel" class="menu-panel">
    <div class="panel-content">
      <div class="yt-alert yt-alert-naked yt-alert-success  ">  <div class="yt-alert-icon">
    <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
              <span class="message">Added to playlist:</span>
  <span class="addto-title yt-uix-tooltip" title="More information about this playlist" data-tooltip-show-delay="750"></span>

    </div>
</div></div>
    </div>
<div class="yt-uix-char-counter" data-char-limit="150"><div class="addto-note-box addto-text-box"><textarea id="addto-note" class="addto-note yt-uix-char-counter-input" maxlength="150"></textarea><label for="addto-note" class="addto-note-label">Add an optional note</label></div><span class="yt-uix-char-counter-remaining">150</span></div>    <button disabled="disabled" type="button" class="playlist-save-note yt-uix-button yt-uix-button-hh-default" onclick=";return false;"  role="button"><span class="yt-uix-button-content">Add note </span></button>
  </div>
  <div id="addto-note-saving-panel" class="menu-panel">
    <div class="panel-content loading-content">
      <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
      <span>Saving note...</span>
    </div>
  </div>
  <div id="addto-note-saved-panel" class="menu-panel">
    <div class="panel-content">
      <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
      <span class="message">Note added to:</span>
    </div>
  </div>
  <div id="addto-note-error-panel" class="menu-panel">
    <div class="panel-content">
      <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
      <span class="message">Error adding note:</span>
      <ul class="error-details"></ul>
      <a class="add-note-link">Click to add a new note</a>
    </div>
  </div>
  <div class="close-note hid">
    <img src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="close-button">
  </div>

  </div>

  </div>

  <script>
$(function() { 
                $('#submitform' ).submit(
                    function( e ) {
                        var formCont = document.getElementById('submitform');
                        var data = new FormData(formCont);
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', '/post/comment.php', true);
                        xhr.send(data);

                        e.preventDefault();
                    } 
                );
            });
  </script>
<style>
.comment.child .comments-textarea {
    display: flex;
}
.comment-form[closed] {
    display: none!important;
}
</style>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/footer.php"); ?>