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
<div id="context-source-container" data-context-source="&quot;electric company&quot; and &quot;see sallys knee&quot;" style="display:none;"></div><div class="primary-col"><div class="search-header yt-uix-expander yt-uix-expander-collapsed">  <div class="filter-top">
    <div class="filter-bar-container">
      
      <ul class="filter-crumb-list"><li class="filter-crumb filter-crumb-ghost"><a class="filter"><span class="filter-text filter-ghost"></span><span class="yt-close" style="
    display: none;
">×</span></a></li></ul>
        

    </div>
  </div>
<div id="results" style="height: 100%;">


      <ol style="display: flex;flex-wrap: wrap;padding-top: 10px;" id="search-results" class="result-list context-data-container">
                  


<?php
                    $stmt = $conn->prepare("SELECT * FROM users ORDER BY id");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($chnls = $result->fetch_assoc()) { 
                ?>

<a href="./profile?id=<?php echo htmlspecialchars($chnls['username']); ?>" style="display: flex;margin: 10px; width: 191px!important;"><img src="/dynamic/pfp/<?php echo htmlspecialchars($chnls['pfp']); ?>" height="60" width="60"><div class="channels-info" style="padding-left: 10px;"><span dir="ltr" class="title" style="font-weight: bold;color: black;font-size: 13px;display: block;margin-bottom: 2px;"><?php echo htmlspecialchars($chnls['username']); ?></span><span dir="ltr" class="title" style="color: #999;font-size: 11px;"><?php echo $_user_fetch_utils->fetch_subs_count($chnls['username']); ?> subscribers</span></div></a>



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
echo "</div></div>";
require($_SERVER['DOCUMENT_ROOT'] . "/2013/static/footer.php");
?>