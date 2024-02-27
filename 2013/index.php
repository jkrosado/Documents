<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/insert.php"); ?>
<?php
    $_user_fetch_utils = new user_fetch_utils();
    $_video_fetch_utils = new video_fetch_utils();
    $_video_insert_utils = new video_insert_utils();
    $_user_insert_utils = new user_insert_utils();
    $_base_utils = new config_setup();
    
    $_base_utils->initialize_db_var($conn);
    $_video_fetch_utils->initialize_db_var($conn);
    $_video_insert_utils->initialize_db_var($conn);
    $_user_fetch_utils->initialize_db_var($conn);
    $_user_insert_utils->initialize_db_var($conn);

  $_base_utils->initialize_page_compass("Homepage");
?>
<title>Home - FulpTube</title>
<?php
include("./static/header.php");
include("./static/guide.php");
// everything here is just calling for most popular videos on youtube and echoing it with the original html.
// i recommend you don't bother much with this.
?>
<div id="content">

<img height="20px" width="20px" class="bannerAsterisk" src="/static/image/asterisk.png" style="padding: 6px 9px 0px 9px; float: left;"></img>
<p style="height: 35px;font-size: 13px;background: #438bc5;color: white;line-height: 35px; padding-left: 15px; font-weight: bold;">We're releasing 2012L soon!</p>
  <div class="branded-page-v2-container enable-fancy-subscribe-button  branded-page-v2-secondary-column-hidden" style="margin-top:0px!important;" scrollamount="20">
    <div class="branded-page-v2-col-container clearfix">
      <div class="branded-page-v2-primary-col">
            <div class="branded-page-v2-primary-col-header-container">
      

  <div id="context-source-container" data-context-source="Popular on YouTube" style="display:none;"></div>

    </div>
  <div class="branded-page-v2-body" id="gh-activityfeed">
        
  <div id="ad_creative_expand_btn_1" class="masthead-ad-control open hid">
    <a onclick="masthead.expand_ad(); return false;">
      <span>Show ad</span>
      <img src="//web.archive.org/web/20121230023058im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">
    </a>
  </div>


    <div class="context-data-container">
                  
  <div class="lohp-newspaper-shelf">
    
    <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE rid = 'MTYzMDcyMDYxMDE57' ORDER BY publish DESC LIMIT 1");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?>
<?php $publishedReadable5 = date( "F j, Y", strtotime($video['publish']) ); ?>


<div class="lohp-large-shelf-container">
        



<div class="context-data-item">
    
    <a href="watch?v=<?php echo $video['rid']; ?>" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CAMQ0h4oAA%3D%3D"><span class="video-thumb ux-thumb yt-thumb-default-370 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" src="/dynamic/thumbs/<?php echo $video['thumbnail']; ?>" onerror="this.src='./img/default.png'" width="370"><span class="vertical-align"></span></span></span></span></a>
      <a class="lohp-video-link max-line-2 yt-uix-sessionlink" data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CAMQ0h4oAA%3D%3D" href="watch?v=<?php echo $video['rid']; ?>" title="<?php echo htmlspecialchars($video['title']); ?>"><?php echo htmlspecialchars($video['title']); ?></a>

    

      <div class="lohp-video-metadata">
          <span class="content-uploader">
<span class="username-prepend">by</span> <a href="profile?id=<?php echo $video['author']; ?>" class="yt-uix-sessionlink yt-user-name " data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D" dir="ltr"><?php echo $video['author']; ?></a>
  </span>

          

          <span class="content-item-time-created">
    <?php echo $publishedReadable5; ?>
  </span>

      </div>
  </div>


    </div>

<?php } ?>
    <div class="lohp-medium-shelves-container">
<?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE featured = 'v' ORDER BY publish DESC LIMIT 3");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?>
<?php $publishedReadable4 = date( "F j, Y", strtotime($video['publish']) ); ?>

<div class="lohp-medium-shelf context-data-item">
    
    <div class="lohp-media-object">
      <a href="watch?v=<?php echo $video['rid']; ?>" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CAYQ0h4oAw%3D%3D"><span class="video-thumb ux-thumb yt-thumb-default-128 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" src="/dynamic/thumbs/<?php echo $video['thumbnail']; ?>" onerror="this.src='./img/default.png'" width="128"><span class="vertical-align"></span></span></span></span>
</a>
    </div>
    <div class="lohp-media-object-content lohp-medium-shelf-content">
        <a class="lohp-video-link max-line-2 yt-uix-sessionlink" data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CAYQ0h4oAw%3D%3D" href="watch?v=<?php echo $video['rid']; ?>" title="<?php echo htmlspecialchars($video['title']); ?>"><?php echo htmlspecialchars($video['title']); ?></a>

      <div class="lohp-video-metadata attached">
          <span class="content-uploader">
<span class="username-prepend">by</span> <a href="profile?id=<?php echo $video['author']; ?>" class="yt-uix-sessionlink yt-user-name " data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D" dir="ltr"><?php echo $video['author']; ?></a>
  </span>

      </div>
        <div class="lohp-video-metadata">

            <span class="content-item-time-created" title="<?php echo $publishedReadable4; ?>">
    <?php echo $publishedReadable4; ?>
  </span>

        </div>
    </div>
  </div>

<?php } ?>
            </div>
  </div>



            <div class="lohp-vbox-list lohp-left-vbox-list">

          <div>
          <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos ORDER BY publish DESC LIMIT 12");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?>
<?php 
$publishedReadable3 = date( "F j, Y", strtotime($video['publish']) );
?>


<div class='lohp-shelf-cell-container lohp-category-shelf '>
   <div class='lohp-category-shelf-item-list lohp-shelf-size-1'>
      <h2 class='branded-page-module-title'>
         <a class='spf-link' href='profile?id=<?php echo $video['author']; ?>' title='profile?id=<?php echo $video['author']; ?>' data-sessionlink='ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;ved=CBIQzh4%3D'>
         <?php echo $video['author']; ?>
         </a>
      </h2>
      <div class='lohp-category-shelf-item context-data-item first-shelf-item last-shelf-item'>
         <a href='watch?v=<?php echo $video['rid']; ?>' class='ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto ' data-sessionlink='ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CBMQzx4oAA%3D%3D'><span class='video-thumb ux-thumb yt-thumb-default-165 '><span class='yt-thumb-clip'><span class='yt-thumb-clip-inner'><img data-thumb='/dynamic/thumbs/<?php echo $video['thumbnail']; ?>' onerror=\"this.src='./img/default.png'\" alt='Thumbnail' src='/dynamic/thumbs/<?php echo $video['thumbnail']; ?>' onerror=\"this.src='./thumbs/default.png'\" width='165' data-group-key='thumb-group-0'><span class='vertical-align'></span></span></span></span></a>
         <a class='lohp-video-link max-line-2 yt-uix-sessionlink' data-sessionlink='ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CBMQzx4oAA%3D%3D' href='watch?v=<?php echo $video['rid']; ?>' title='<?php echo htmlspecialchars($video['title']); ?>'><?php echo htmlspecialchars($video['title']); ?></a>
         <div class='lohp-video-metadata'>
            <span class='content-item-time-created'>
            <?php echo $publishedReadable3; ?>
            </span>
         </div>
      </div>
   </div>
</div>
<?php } ?>
  </div>

  </div>



            <div class="lohp-vbox-list lohp-right-vbox-list">
          <div class="lohp-vertical-shelf">
    
        <h2 class="branded-page-module-title">
      <a class="spf-link" href="/web/20121230023058/http://www.youtube.com/channel/HCp-Rdqh3z4Uc?feature=g-logo" title="Music" data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;ved=CEoQzh4%3D">
        Music
      </a>
    </h2>
<?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE category = 'Music' ORDER BY publish DESC LIMIT 3");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?>



<div class="lohp-vertical-shelf-item context-data-item">
        <div class="lohp-media-object">
          <a href="watch?v=qzdPTjk9aTg" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CFEQzx4oAA%3D%3D"><span class="video-thumb ux-thumb yt-thumb-default-64 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" src="/dynamic/thumbs/<?php echo $video['thumbnail']; ?>" onerror="this.src='./img/default.png'" width="64" data-group-key="thumb-group-1"><span class="vertical-align"></span></span></span></span></a>
        </div>
        <div class="lohp-vertical-shelf-item-content lohp-media-object-content">
            <a class="lohp-video-link max-line-3 yt-uix-sessionlink" data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CFEQzx4oAA%3D%3D" href="watch?v=<?php echo $video['rid']; ?>" title="<?php echo htmlspecialchars($video['title']); ?>"><?php echo htmlspecialchars($video['title']); ?></a>

          <div class="lohp-video-metadata attached">
              <span class="content-uploader">
<span class="username-prepend">by</span> <a href="profile?id=<?php echo $video['author']; ?>" class="yt-uix-sessionlink yt-user-name " data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D" dir="ltr"><?php echo $video['author']; ?></a>
  </span>

          </div>
        </div>
      </div>

<?php } ?>
  </div>

          <div class="lohp-vertical-shelf">
    
        <h2 class="branded-page-module-title">
      <a class="spf-link" href="/web/20121230023058/http://www.youtube.com/channel/HC4qRk91tndwg?feature=g-logo" title="Most Popular" data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;ved=CFAQzh4%3D">
        Entertainment
      </a>
    </h2>

      <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE category = 'Entertainment' ORDER BY publish DESC LIMIT 3");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?>


<div class="lohp-vertical-shelf-item context-data-item">
        <div class="lohp-media-object">
          <a href="watch?v=qzdPTjk9aTg" class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto " data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CFEQzx4oAA%3D%3D"><span class="video-thumb ux-thumb yt-thumb-default-64 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" src="/dynamic/thumbs/<?php echo $video['thumbnail']; ?>" onerror="this.src='./img/default.png'" width="64" data-group-key="thumb-group-1"><span class="vertical-align"></span></span></span></span></a>
        </div>
        <div class="lohp-vertical-shelf-item-content lohp-media-object-content">
            <a class="lohp-video-link max-line-3 yt-uix-sessionlink" data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D&amp;feature=g-logo&amp;ved=CFEQzx4oAA%3D%3D" href="watch?v=<?php echo $video['rid']; ?>" title="<?php echo htmlspecialchars($video['title']); ?>"><?php echo htmlspecialchars($video['title']); ?></a>

          <div class="lohp-video-metadata attached">
              <span class="content-uploader">
<span class="username-prepend">by</span> <a href="profile?id=<?php echo $video['author']; ?>" class="yt-uix-sessionlink yt-user-name " data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D" dir="ltr"><?php echo $video['author']; ?></a>
  </span>

          </div>
        </div>
      </div>

<?php } ?>
      </div>
  </div>

  </div>

  <div style="clear:both;"></div>



    </div>

  </div>

      </div>
    </div>
    <hr class="branded-page-v2-col-container-bottom-border">
  </div>
</div>
<link type="text/css" rel="stylesheet" href="2014.css">
<meta property="og:type" content="website">
<meta property="og:title" content="FulpTube"/>
<meta property="og:description" content="Share videos with the world on FulpTube"/>
<meta property="og:url" content="FulpTube"/>
<meta property="og:image" content="https://ssdm.co/wp-content/uploads/2017/07/youtube_pattern-1080x675.png"/>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/2013/static/footer.php"); ?>
