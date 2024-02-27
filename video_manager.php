<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/important/config.inc.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/base.php"); ?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/lib/new/fetch.php"); ?>
<?php
  $_user_fetch_utils = new user_fetch_utils();
  $_video_fetch_utils = new video_fetch_utils();
  $_base_utils = new config_setup();
 
  $_base_utils->initialize_db_var($conn);
  $_video_fetch_utils->initialize_db_var($conn);
  $_user_fetch_utils->initialize_db_var($conn);

  $_base_utils->initialize_page_compass("Creator Studio");
?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/guide.php"); ?>
<!DOCTYPE html>
<html>
    <head>
<style>
img.video-manager-icon {
    width: 11px;
    height: 11px;
}
tr#videoslist {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
        #body-container {width: 100%;}
        
        .www-core-container {
            margin: 0;
            width: 100%;
        }

        div#page-container {
            width: 974px;
            margin-left: 225px;
        }
#body-container {width: 100%;}

.www-core-container {
    margin: 0!important;
    width: 100%!important;
}

div#page-container {
    width: 974px;
    margin-left: 225px;
}

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
	margin-top: 50px;
	padding-left: 50px!important;
	border-right: solid 1px #e2e2e2;
	background-color: #fbfbfb;
}
div#page-container {
    margin-top: 20px;
}

.sign-in-form-box {
    background: #f1f1f1!important;
    border: 1px solid #e5e5e5;
}

input[type="submit"] {
    background-color: #f8f8f8!important;
    color: #333!important;
    border-color: #d3d3d3!important;
    padding: 7px!important;
    border: 1px solid #c6c6c6!important;
    font-weight: bold!important;
    font-size: 12px!important;
    background-image: none!important;
    width: auto!important;
    height: auto!important;
    font-family: arial,sans-serif;
}
        </style>
        <title>FulpTube - <?php echo $_base_utils->return_current_page(); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/static/css/www-core.css">
    </head>
    <body>
        <div class="www-core-container" style="height: 1300px;">
            <?php require($_SERVER['DOCUMENT_ROOT'] . "/static/header.php"); ?>
            <div class="manage-top">
                <h1 style="font-size: 20px; margin-bottom: 15px;">Creator Studio</h1>
            </div>
                <?php
                    $search = $_SESSION['siteusername'];
                    $stmt56 = $conn->prepare("SELECT * FROM videos WHERE author = ? AND visibility = 'v'");
                    $stmt56->bind_param("s", $search);
                    $stmt56->execute();
                    $result854 = $stmt56->get_result();
                    $result56 = $result854->num_rows;

                    $results_per_page = 12;

                    $stmt = $conn->prepare("SELECT * FROM videos WHERE author = ? ORDER BY id DESC");
                    $stmt->bind_param("s", $_SESSION['siteusername']);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    $results = $result->num_rows;

                    $number_of_result = $result->num_rows;
                    $number_of_page = ceil ($number_of_result / $results_per_page);  

                    if (!isset ($_GET['page']) ) {  
                        $page = 1;  
                    } else {  
                        $page = (int)$_GET['page'];  
                    }  

                    $page_first_result = ($page - 1) * $results_per_page;  

                    $stmt->close();
                ?>
            <div class="manage-base">
                <table style="width: 100%;">
                    <tr>
                        <!-- <th style="margin: 5px; width: 5%;"></th> -->
                        <th style="width: 80%;"></th>
                        <th style="margin: 5px; width: 20%;"></th>
                    </tr>
                    <?php
                        $stmt6 = $conn->prepare("SELECT * FROM videos WHERE author = ? ORDER BY id DESC LIMIT ?, ?");
                        $stmt6->bind_param("sss", $search, $page_first_result, $results_per_page);
                        $stmt6->execute();
                        $result6 = $stmt6->get_result();

                        while($row = $result6->fetch_assoc()) { 
                            if($row['thumbnail'] == ".png" && $row['filename'] == ".mp4") {
                                $status = "Corrupted";
                            } else if($row['visibility'] == "v") {
                                $status = "Approved";
                            } else if($row['visibility'] == "n") {
                                $status = "Waiting for Approval";
                            } else if($row['visibility'] == "o") {
                                $status = "Disapproved";
                            } else {
                                $status = "Unknown";
                            }                            
                    ?> 
                    <tr style="margin-top: 5px;" id="videoslist">
                        <td class="video-manager-left">
                            <span style="display: inline-block;float: right;"></span>
                            <div class="video-thumbnail r120" 
                            style="background-image: url('/dynamic/thumbs/<?php echo $row['thumbnail']; ?>'), url('/dynamic/thumbs/default.png');">
                            <div class="video-timestamp">
                                <span>
                                <?php echo $_video_fetch_utils->timestamp($row['duration']); ?>
                                </span>
                            </div>
                        </div>
                            <span class="video-manager-info">
                            <a class="video-manager-title" href="watch?v=<?php echo $row['rid']; ?>"><?php echo htmlspecialchars($row['title']); ?></a>
                            <span class="video-manager-status">Approved</span>
                            <span style="color: #919191;"><?php echo date("F d, Y g:sA", strtotime($row['publish'])); ?></span>
                            <a href="edit_video?id=<?php echo $row['rid']; ?>">
                                <button type="button" class=" yt-uix-button yt-uix-button-hh-default" role="button">
                                    Edit
                                </button>
                            </a>
                                   
                        </td>
                        <td class="video-manager-stats">
                            <span class="video-manager-span">
                                <img src="/static/img/views.png" class="video-manager-icon"> <?php echo $_video_fetch_utils->fetch_video_views($row['rid']); ?>
                            </span>

                            <span class="video-manager-span">
                                <img src="/static/img/like_video_manager.png" class="video-manager-icon"> <?php echo $_video_fetch_utils->get_video_likes($row['rid']); ?>
                            </span>

                            <span class="video-manager-span">
                                <img src="/static/img/dislike_video_manager.png" class="video-manager-icon"> <?php echo $_video_fetch_utils->get_video_dislikes($row['rid']); ?>
                            </span>

                            <span class="video-manager-span">
                                <img src="/static/img/comments_video_manager.png" class="video-manager-icon"> <?php echo $_video_fetch_utils->get_comments_from_video($row['rid']); ?>
                            </span>
                        </td>
                    </tr>
                    <?php } ?>
                </table> 
                <?php for($page = 1; $page<= $number_of_page; $page++) { ?>
                    <a href="video_manager?page=<?php echo $page ?>">
                        <button class="www-button www-button-grey"><?php echo $page; ?></button>
                    </a>
                <?php } ?>   
            </div>
        </div>
        <div class="www-core-container">
        </div>
    </body>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/static/footer.php"); ?>
<style>
span.video-manager-info {
    display: flex;
    flex-direction: column;
    float: right;
}

.video-timestamp {
    top: 73px;
}

td.video-manager-left {
    display: flex;
    flex-direction: row;
}

a.video-manager-title {
    font-size: 18px;
    font-weight: bold;
    color: black;
}

.video-thumbnail.r120 {
    margin-right: 10px;
}

span.video-manager-info span {
    margin: 1px 0;
}
.r120 {
    width: 145px;
    height: 92px;
}
tr#videoslist {
    margin: 15px 0;
}
</style>
</html>