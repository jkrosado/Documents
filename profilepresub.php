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

    $_user = $_user_fetch_utils->fetch_user_username($_GET['id'])
;
    if($_user_fetch_utils->user_exists($_user['username']) == false) {
        // require($_SERVER['DOCUMENT_ROOT'] . "/yts/pgbin/terminated.php");
        $channelErr = file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/yts/pgbin/terminated.php");
        die($channelErr);
    }

    $_user['subscribed'] = $_user_fetch_utils->if_subscribed(@$_SESSION['siteusername'], $_user['username']);
    $_user['dLinks'] = json_decode($_user['links']);

    $_base_utils->initialize_page_compass(htmlspecialchars($_user['username']));

    if(empty($_user['bio'])) {
        $_user['bio'] = "No bio specified...";
    }

include("./static/header.php");
if(isset($_GET["id"])) {
	$id = $_GET["id"];
} else {
	die();
}
if(isset($_GET["sort"])) {
	$sort_by = $_GET["sort"];
} else {
	$sort_by = "newest";
}
if(isset($_GET["query"])) {
	$query = $_GET["query"];
} else {
	$query = "";
}
// $videoList = json_decode(file_get_contents("https://invidious.zapashcanon.fr/api/v1/channels/".$id)); 
		  
$author = $videoList->author;
$profpic = $videoList->authorThumbnails[2]->url;
$subcount = $videoList->subCount;
$totalviews = $videoList->totalViews;
$joindate = $videoList->joined;
$description = $videoList->descriptionHtml;

if(isset($videoList->error)) {
	die("<br><center>There is no info for this channel.</center><br>");
}

?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/guide.php"); ?>
<script>
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
</script>
<script id="js-2120046522" src="//web.archive.org/web/20130107030743js_/http://s.ytimg.com/yts/jsbin/www-channels3-vflxBNsLu.js" data-loaded="true"></script>
<title>FulpTube - <?php echo $_base_utils->return_current_page(); ?></title>
<style>
.channel-customization-base h1 {
    color: black!important;
    font-weight: bold!important;
    display: block!important;
}
#guide {
    transform: translate(-220px);
    transition: 0.3s ease-in-out;
}

#guide:hover {
    transform: translate(0px)!important;
}
/*div#branded-page-header-container {
    width: 970px;
    margin-left: 225px;
    margin-right: 245px;
    text-align: left;
}
#branded-page-body, #iframe-wide-body {
    overflow: hidden;
    margin: 0 auto 50px 225px;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: 225px;
    width: 970px;
    text-align: left;
}
div#branded-page-header-container {
    margin-left: 235px;
    margin-right: auto;
}

div#branded-page-body {
    margin: 0 auto 50px 235px;
}*/
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
	padding-left: 50px!important;
	border-right: solid 1px #e2e2e2;
	background-color: #fbfbfb;
}
.channel-customization-base[closed] {
    height: 0px;
    padding: 0px;
    margin: 0px;
}

.channel-customization-base {
    transition: 0.5s ease-in-out;
}

.channel-customization-base[open] {
    height: 250px;
    padding: 5px;
}
.user-subscribe-button-text {
    margin-left: 0px!important;
}
.exp-new-site-width #content {
    width: auto;
}
button.user-subscribe {
    display: flex;
    align-items: center;
}

.user-subscribe-button-text {
    margin-left: 0px;
}
.exp-new-site-width #page {
    width: auto;
    margin-left: 0!important;
}
      #branded-page-body-container {
                background-color: <?php echo htmlspecialchars($_user['2012_bgcolor']); ?>;
                background-image: url(/dynamic/banners/<?php echo $_user['2012_bg']; ?>);
                background-position: center top;
                <?php
                    $bgoption = "";
                            /*
                                <select name="bgoption" id="cars">
                                    <option value="repeaty">Repeat - Y</option>
                                    <option value="repeatx">Repeat - X</option>
                                    <option value="repeatxy">Repeat - X and Y</option>
                                    <option value="stretch">Stretch</option>
                                    <option value="solid">Solid</option>
                                </select>
                            */

                    switch($_user['2012_bgoption']) {
                        case "stretch":
                        echo "background-size: cover;";
                        break;
                        case "solid":
                        echo "";
                        break;
                        case "norepeat":
                        echo "background-repeat: no-repeat;";
                        break;
                        case "repeatxy":
                        echo "background-repeat: repeat;";
                        break;
                        case "repeaty":
                        echo "background-repeat: repeat-y;";
                        break;
                        case "repeatx":
                        echo "background-repeat: repeat-x;";
                        break;
                    }
                ?>
  }

</style>
<link rel="stylesheet" href="/static/css/www-core.css">
<link id="css-3345296040" rel="stylesheet" href="./asset/channels.css">
<div id="content">
          
    <div class="subscription-menu-expandable subscription-menu-expandable-channels3 yt-rounded ytg-wide hid">
    <div class="content" id="recommended-channels-list"></div>
    <button class="close" type="button">close</button>
  </div>

      <div class="hid">
    <div class="yt-alert yt-alert-default yt-alert-success  " id="success-template">  <div class="yt-alert-icon">
    <img src="//web.archive.org/web/20130207160144im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"><button onclick=";return false;" class="close yt-uix-close yt-uix-button yt-uix-button-close" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert"></div></div>
    <div class="yt-alert yt-alert-default yt-alert-error  " id="error-template">  <div class="yt-alert-icon">
    <img src="//web.archive.org/web/20130207160144im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"><button onclick=";return false;" class="close yt-uix-close yt-uix-button yt-uix-button-close" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert"></div></div>
    <div class="yt-alert yt-alert-default yt-alert-warn  " id="warn-template">  <div class="yt-alert-icon">
    <img src="//web.archive.org/web/20130207160144im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"><button onclick=";return false;" class="close yt-uix-close yt-uix-button yt-uix-button-close" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert"></div></div>
    <div class="yt-alert yt-alert-default yt-alert-info  " id="info-template">  <div class="yt-alert-icon">
    <img src="//web.archive.org/web/20130207160144im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"><button onclick=";return false;" class="close yt-uix-close yt-uix-button yt-uix-button-close" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert"></div></div>
    <div class="yt-alert yt-alert-default yt-alert-status  " id="status-template">  <div class="yt-alert-icon">
    <img src="//web.archive.org/web/20130207160144im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"><button onclick=";return false;" class="close yt-uix-close yt-uix-button yt-uix-button-close" type="button" data-close-parent-class="yt-alert" role="button"><span class="yt-uix-button-content">Close </span></button></div><div class="yt-alert-content" role="alert"></div></div>
  </div>

  <div class="hid">
    <div id="message-container-template" class="message-container"></div>
  </div>




  <div id="branded-page-default-bg" class="ytg-base">
    <div id="branded-page-body-container" class="ytg-base clearfix enable-fancy-subscribe-button">

      <div id="branded-page-header-container" class="ytg-wide ">

          <div id="branded-page-header" class="ytg-wide">
    <div id="channel-header-main">
      <div class="upper-section clearfix">
                    <?php 
            if(isset($_SESSION['siteusername']) && $_SESSION['siteusername'] == $_user['username']) 
                require($_SERVER['DOCUMENT_ROOT'] . "/static/module/channel_customization_2012L.php");
            ?>
        <a href="profile?id=<?php echo $_GET['id']; ?>">
          <span class="channel-thumb">
            <span class="video-thumb ux-thumb yt-thumb-square-60 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="<?php echo $author; ?>" src="/dynamic/pfp/<?php echo $_user['pfp']; ?>" width="60"><span class="vertical-align"></span></span></span></span>
          </span>
        </a>
          <div class="upper-left-section ">

    <h1>
        <?php if(isset($_SESSION['siteusername']) && $_SESSION['siteusername'] == $_user['username']) { ?> <img src="/static/img/edit-icon.png" style="width: 21px;height: 21px;margin-right: 4px;cursor: pointer;" id="www-dropdown-customization" onclick="dropdownchannel()"> <?php } ?><span class="qualified-channel-title" title="<?php echo htmlspecialchars($_user['username']); ?>'s channel"><?php echo htmlspecialchars($_user['username']); ?></span>

    </h1>


  </div>

        <div class="upper-left-section">
                              <a href="/get/<?php if($_user['subscribed']) { echo "un"; } ?>subscribe?n=<?php echo htmlspecialchars($_user['username']);?>">
                    <button class="user-subscribe <?php if($_user['subscribed']) { echo "subscribed"; } ?>">
                        <img style="width: 19px;height: 22px;position: relative;left: -7px;" src="/static/img/user_subscribe<?php if($_user['subscribed']) { echo "d"; } ?>.png">
                        <span class="user-subscribe-button-text">Subscribe<?php if($_user['subscribed']) { echo "d"; } ?></span>
                    </button>
                </a>
        </div>
        <div class="upper-right-section">
            <div class="header-stats">

    
    <div class="stat-entry">
        <span class="stat-value"><?php echo $_user_fetch_utils->fetch_subs_count($_user['username']); ?></span>
  <span class="stat-name">subscribers</span>

    </div>


      
    <div class="stat-entry">
        <span class="stat-value"><?php echo $_video_fetch_utils->fetch_views_from_user($_user['username']); ?></span>
  <span class="stat-name">video views</span>

    </div>

  </div>

          <span class="valign-shim"></span>
        </div>
      </div>
        <div class="channel-horizontal-menu clearfix">
            <ul role="tablist">
          

          <li role="presentation" class="selected">
    <a href="#" class="gh-tab-101" role="tab" aria-selected="true">
      Browse videos

    </a>
  </li>

  </ul>

              

        </div>
    </div>
  </div>

      </div>

      <div id="branded-page-body">
          <div class="channel-tab-content channel-layout-two-column selected channel-tab-feed-content">
    <div class="tab-content-body">
      <div class="primary-pane">
        <div class="channel-browse">
          <div class="browse-heading channels-browse-gutter-padding">
              <div id="channels-browse-header" class="clearfix">
			  
			  
      

      <ul>

    
      <li class="channels-browse-filter selected">
    <a href="#">
      Uploads
    </a>
  </li>

      



        


      


  </ul>

  </div>

              <hr class="yt-horizontal-rule channel-section-hr">

          </div>
          
    <div class="channels-browse-gutter-padding">
        
  <ul id="channels-browse-content-grid" class="channels-browse-content-grid context-data-container ">

                  <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE author = ? ORDER BY id DESC LIMIT 13");
                    $stmt->bind_param("s", $_GET['id']);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?> 

<li class='channels-content-item'>
   <span class='context-data-item' data-context-item-user='<?php echo htmlspecialchars($video['author']); ?>' data-context-item-type='video' data-context-item-id='<?php echo htmlspecialchars($video['rid']); ?>' data-context-item-time='12:03' data-context-item-title='<?php echo htmlspecialchars($video['title']); ?>' data-context-item-views='339,590 views'>
   <a href='watch?v=<?php echo htmlspecialchars($video['rid']); ?>' class='ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto spf-link' data-sessionlink='ei=5s8TUZqgFKqihgH7noCQBQ'><span class='video-thumb ux-thumb yt-thumb-default-194 '><span class='yt-thumb-clip'><span class='yt-thumb-clip-inner'><img alt='Thumbnail' src='/dynamic/thumbs/<?php echo $video['thumbnail']; ?>' width='194'><span class='vertical-align'></span></span></span></span>
   </a>
   <span class='content-item-detail'>
   <a href='watch?v=<?php echo htmlspecialchars($video['rid']); ?>' title='<?php echo htmlspecialchars($video['title']); ?>' class='content-item-title spf-link yt-uix-sessionlink yt-uix-contextlink' dir='ltr'>
   <?php echo htmlspecialchars($video['title']); ?>
   </a>
   <span class='content-item-metadata'>
   <span class='content-item-view-count'><?php echo $_video_fetch_utils->get_video_views($video['rid']); ?> views</span>
   <span class='metadata-separator'>|</span>
   <span class='content-item-time-created'><?php echo $_video_fetch_utils->time_elapsed_string($video['publish']); ?></span>
   </span>
   </span>
   </span>
</li>
<?php } ?>
  </ul>
  

    </div>

        </div>
      </div>
      <div class="secondary-pane">
        
        
                <div class="user-profile channel-module yt-uix-c3-module-container ">
    <div class="module-view profile-view-module" data-owner-external-id="gvZXTuGMG7DjMP_9eiWhBQ">
        <h2>
About <?php echo $_user['username']; ?>'s channel
        </h2>
      <div class="section first">
        <div class="user-profile-item profile-description">
              <?php echo $_video_fetch_utils->parseTextNoLink(htmlspecialchars($_user['bio'])); ?>


        </div>
          
          <hr style="
    border: 1px inset;
">

      </div>
      <div class="section created-by-section">
        <div class="user-profile-item">
by <span class="yt-user-name " dir="ltr"><?php echo $_user['username']; ?></span>
        </div>
        <ul>
          
        </ul>
      </div>
        
  <ul class="section">

                    <span class="section-user" style="width: 100%!important; color: #000!important;" >Latest Activity <span class="section-user-info" style="color: #808080!important;"><?php echo date("M d, Y", strtotime($_user['created'])); ?></span></span><br>
                    <span class="section-user" style="width: 100%!important; color: #000!important;">Date Joined <span class="section-user-info" style="color: #808080!important;"><?php echo date("M d, Y", strtotime($_user['lastlogin'])); ?></span></span>

  </ul>
    <hr class="yt-horizontal-rule ">


    </div>
  </div>


                <div class="channel-module other-channels yt-uix-c3-module-container other-channels-compact">
    <div class="module-view other-channels-view">
	<?php
/*$videoList = json_decode(file_get_contents("https://invidious.zapashcanon.fr/api/v1/channels/".$id)); 
$count = 0;
foreach($videoList->relatedChannels as $item){
	$count++;
	if($count == 1) {
		echo "<h2>Featured Channels</h2>
        <ul class='channel-summary-list '>";
	} else {
		echo "<ul class='channel-summary-list '>";
	}
	echo "<li class='yt-tile-visible yt-uix-tile'>
   <div class='channel-summary clearfix channel-summary-compact'>
      <div class='channel-summary-thumb'>
         <span class='video-thumb ux-thumb yt-thumb-square-46 '><span class='yt-thumb-clip'><span class='yt-thumb-clip-inner'><img data-thumb='".$item->authorThumbnails[0]->url."' alt='Thumbnail' src='".$item->authorThumbnails[0]->url."' width='46' data-group-key='thumb-group-0'><span class='vertical-align'></span></span></span></span>
      </div>
      <div class='channel-summary-info'>
         <h3 class='channel-summary-title'>
            <span class='qualified-channel-title' title='".$item->author."'><a href='profile?id=".$item->authorId."' dir='ltr' class='yt-uix-tile-link'>".$item->author."</a></span>
         </h3>
      </div>
   </div>
</li>";
}*/?>
  </ul>
    </div>
  </div>


        
      </div>
    </div>
  </div>

      </div>


      
    </div>
  </div>



      </div>
        <script>
        function dropdownchannel () {
            var container = document.querySelector("#customization-container");
            if(container.getAttribute("closed") == '') {
                container.setAttribute("open","");
                container.removeAttribute("closed");
            } else {
                container.removeAttribute("open");
                container.setAttribute("closed","");
            }
        }
        </script>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/footer.php"); ?>