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

  $search = "%" . htmlspecialchars($_GET['search_query']) . "%";

  $_base_utils->initialize_page_compass("Sign In");
?>
<?php
include("./static/header.php");
include("./static/guide.php");
$query = $_GET['search_query'];
?>
<div id="content">
<div id="context-source-container" data-context-source="&quot;no&quot; and &quot;see sallys knee&quot;" style="display:none;"></div><div class="primary-col"><div class="search-header yt-uix-expander yt-uix-expander-collapsed">  <div class="filter-top">
    <div class="filter-bar-container">
      
      <ul class="filter-crumb-list"><li class="filter-crumb filter-crumb-ghost"><a class="filter"><span class="filter-text filter-ghost"></span><span class="yt-close" style="
    display: none;
">×</span></a></li></ul>
        

    </div>
  </div>
<div id="filter-dropdown" class="yt-uix-expander-body"><div class="filter-col"><h4 class="filter-col-title">Upload Date</h4><ul><li>
  

<a class="filter " title="Last hour" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+hour&amp;lclk=hour"><span class="filter-text filter-ghost">Last hour</span></a>
</li><li>
  

<a class="filter " title="Today" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+today&amp;lclk=today"><span class="filter-text filter-ghost">Today</span></a>
</li><li>
  

<a class="filter " title="This week" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+this+week&amp;lclk=this_week"><span class="filter-text filter-ghost">This week</span></a>
</li><li>
  

<a class="filter " title="This month" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+this+month&amp;lclk=this_month"><span class="filter-text filter-ghost">This month</span></a>
</li><li>
  

<a class="filter " title="This year" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+this+year&amp;lclk=this_year"><span class="filter-text filter-ghost">This year</span></a>
</li></ul></div><div class="filter-col"><h4 class="filter-col-title">Result Type</h4><ul><li>
  

<a class="filter " title="Video" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+video&amp;lclk=video"><span class="filter-text filter-ghost">Video</span></a>
</li><li>
  

<a class="filter " title="Channel" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+channel&amp;lclk=channel"><span class="filter-text filter-ghost">Channel</span></a>
</li><li>
  

<a class="filter " title="Playlist" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+playlist&amp;lclk=playlist"><span class="filter-text filter-ghost">Playlist</span></a>
</li><li>
  

<a class="filter " title="Movie" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+movie&amp;lclk=movie"><span class="filter-text filter-ghost">Movie</span></a>
</li><li>
  

<a class="filter " title="Show" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+show&amp;lclk=show"><span class="filter-text filter-ghost">Show</span></a>
</li></ul></div><div class="filter-col"><h4 class="filter-col-title">Duration</h4><ul><li>
  

<a class="filter " title="Short (~4 minutes)" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+short&amp;lclk=short"><span class="filter-text filter-ghost">Short (~4 minutes)</span></a>
</li><li>
  

<a class="filter " title="Long (20~ minutes)" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+long&amp;lclk=long"><span class="filter-text filter-ghost">Long (20~ minutes)</span></a>
</li></ul></div><div class="filter-col"><h4 class="filter-col-title">Features</h4><ul><li>
  

<a class="filter " title="HD (high definition)" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+hd&amp;lclk=hd"><span class="filter-text filter-ghost">HD (high definition)</span></a>
</li><li>
  

<a class="filter " title="CC (closed caption)" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+cc&amp;lclk=cc"><span class="filter-text filter-ghost">CC (closed caption)</span></a>
</li><li>
  

<a class="filter " title="Creative commons" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+creativecommons&amp;lclk=creativecommons"><span class="filter-text filter-ghost">Creative commons</span></a>
</li><li>
  

<a class="filter " title="3D" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+3d&amp;lclk=3d"><span class="filter-text filter-ghost">3D</span></a>
</li><li>
  

<a class="filter " title="Live" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_date_uploaded&amp;search_type=videos&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22%2C+live&amp;lclk=live"><span class="filter-text filter-ghost">Live</span></a>
</li></ul></div><div class="filter-col"><h4 class="filter-col-title">Sort by</h4><ul><li>

  

<a class="filter filter-sort " title="" href="/web/20130127182407/http://www.youtube.com/results?search_query=%22electric+company%22+and+%22see+sallys+knee%22&amp;search_type=videos"><span class="filter-text ">Relevance</span></a>
</li><li>

  

<span class="filter filter-sort filter-selected " title=""><span class="filter-text ">Upload date</span></span>
</li><li>

  

<a class="filter filter-sort " title="" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_view_count&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22&amp;search_type=videos"><span class="filter-text ">View count</span></a>
</li><li>

  

<a class="filter filter-sort " title="" href="/web/20130127182407/http://www.youtube.com/results?search_sort=video_avg_rating&amp;search_query=%22electric+company%22+and+%22see+sallys+knee%22&amp;search_type=videos"><span class="filter-text ">Rating</span></a>
</li></ul></div></div></div><div id="results">

      

    
  






  
    


    


    <h1 style="padding-left: 15px;padding-top: 10px;font-size: 20px;">Watch Later</h1>


      <ol id="search-results" class="result-list context-data-container">
                  


<?php
                    $stmt = $conn->prepare("SELECT * FROM watchlater WHERE author = ? ");
                    $stmt->bind_param("s", $_SESSION['siteusername']);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    if($result->num_rows==0) {
                        echo "<p style='padding-left: 15px; padding-top: 10px;'>You haven't added anything to your Watch Later list.</p>";
                    }
                    while($videos = $result->fetch_assoc()) {
$video = $_video_fetch_utils->fetch_video_rid($videos['video']); 
                ?>
<?php $publishedReadable6 = date( "F j, Y", strtotime($video['publish']) ); ?>

<li class='yt-lockup2 yt-lockup2-video yt-uix-tile context-data-item clearfix '>
   <div class='yt-lockup2-thumbnail'><a href='watch?v=<?php echo $video['rid']; ?>' class='ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto ' data-sessionlink='ei=CNGX56CUibUCFQo8RAodEEKIqg%3D%3D&amp;ved=CAMQwBs%3D'><span class='video-thumb ux-thumb yt-thumb-default-185 '><span class='yt-thumb-clip'><span class='yt-thumb-clip-inner'><img alt='Thumbnail' src='/dynamic/thumbs/<?php echo $video['thumbnail']; ?>' width='185'><span class='vertical-align'></span></span></span><span class="video-time"><?php if(substr(gmdate("i:s", $video['duration']), 0, 1) == "0") { echo substr(gmdate("i:s", $video['duration']), 1); } else { echo gmdate("i:s", $video['duration']); } ?></span></span>  <button title='Remove from Watch Later' onclick=";window.location.href=this.getAttribute('href');return false;" href='/static/module/addtowl.php?v=<?php echo $video['rid']; ?>' class='addto-button video-actions spf-nolink addto-watch-later-button-error yt-uix-button yt-uix-button-hh-default yt-uix-button-short yt-uix-tooltip' type='button' data-video-ids='petKDNDB3DI' data-button-menu-id='shared-addto-watch-later-login' role='button'><span class='yt-uix-button-content'>  <img src='/yts/img/pixel-vfl3z5WfW.gif' alt='Watch Later'>
 </span><img class='yt-uix-button-arrow' src='http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif' alt=''></button>
      </a>
   </div>
   <div class='yt-lockup2-content'>
      <h3 class='yt-lockup2-title'><a class='yt-uix-sessionlink yt-uix-tile-link yt-uix-contextlink ' dir='ltr' data-sessionlink='ei=CNGX56CUibUCFQo8RAodEEKIqg%3D%3D&amp;ved=CAIQvxs%3D' href='watch?v=<?php echo $video['rid']; ?>'><?php echo $video['title']; ?></a></h3>
      <p class='yt-lockup2-meta'>  by <a href='profile?id=<?php echo $video['author']; ?>' class='yt-uix-sessionlink yt-user-name ' data-sessionlink='ei=CNGX56CUibUCFQo8RAodEEKIqg%3D%3D&amp;ved=CAQQwRs%3D' dir='ltr'><?php echo $video['author']; ?></a><?php
$_user = $_user_fetch_utils->fetch_user_username($video['author']);
if($_user['partner'] == "y") {
    echo "<img src='/yts/img/pixel-vfl3z5WfW.gif' class='yt-uix-tooltip yt-channel-title-icon-verified' alt='' title='Verified' data-tooltip-text='Verified'>";
}
?><span class='metadata-separator'>•</span><?php echo $publishedReadable6; ?><span class='metadata-separator'>•</span><?php echo $_video_fetch_utils->fetch_video_views($video['rid']); ?> views</p>
      <p class='yt-lockup2-description' dir='ltr'><?php echo mb_strimwidth(htmlspecialchars($video['description']), 0, 50, "..."); ?></p>
      <div class='yt-lockup2-badges'>
         <ul class='item-badge-line'></ul>
      </div>
   </div>
</li>


<?php } ?>

    

          



    

          



    

          



    

          



    

          



    

          



    

          



    

          



    


      </ol>





    

    
  <div class="promoted-videos pyv-promoted-videos">
    <ol class="context-data-container result-list">
          
    </ol>

      
      
  </div>




</div></div>  



<link type="text/css" rel="stylesheet" href="2014.css">

<style>
div#page-container {
    height: 100%;
}
</style>

<?php 
/*echo "</div></div>";
require($_SERVER['DOCUMENT_ROOT'] . "/static/footer.php");*/
?>