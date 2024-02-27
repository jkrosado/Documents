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

  $search = "%" . htmlspecialchars($_GET['q']) . "%";
  $stmt56 = $conn->prepare("SELECT * FROM videos WHERE lower(title) LIKE lower(?) ");
  $stmt56->bind_param("s", $search);
  $stmt56->execute();
  $result854 = $stmt56->get_result();
  $result56 = $result854->num_rows;

  $stmt3 = $conn->prepare("SELECT pfp, username FROM users WHERE lower(username) LIKE lower(?)  ORDER BY rand() DESC LIMIT 6");
  $stmt3->bind_param("s", $search);
  $stmt3->execute();
  $result3 = $stmt3->get_result();
  $result56 = $result56 + $result3->num_rows;

  $_base_utils->initialize_page_compass(htmlspecialchars($_GET['q']));
?>
<!DOCTYPE html>
<html>
    <head>
        <title>SubRocks - <?php echo $_base_utils->return_current_page(); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/static/css/new/www-core.css">


        <style>
            .channel-box-top {
                background: #666;
                color: white;
                padding: 5px;
            }

            .sub_button {
                position: relative;
                bottom: 2px;
            }

            .channel-box-description {
                background: #e6e6e6;
                border: 1px solid #666;
                color: #666;
                padding: 5px;
            }

            .channel-box-no-bg {
                border: 1px solid #666;
                color: black;
                padding: 5px;
            }

            .channel-pfp {
                height: 88px;
                width: 88px;
                border-color: #666;
                border: 3px double #999;
            }

            .channel-stats {
                display: inline-block;
                vertical-align: top;
            }

            .channel-stats-minor {
                font-size: 11px;
            }
            
            .comment-pfp {
                width: 52px;
                height: 52px;
                border-color: #666;
                display: inline-block;
                border: 3px double #999;
            }
        </style>
    </head>
    <body>
        <div class="www-core-container">
            <?php require($_SERVER['DOCUMENT_ROOT'] . "/static/module/header.php"); ?>
            <span style="float: right;">
            <a href="/search_query?q=<?php echo htmlspecialchars($_GET['q']); ?>&lclk=this_week">This Week</a> &bull; 
            <a href="/search_query?q=<?php echo htmlspecialchars($_GET['q']); ?>&lclk=this_month">This Month</a> &bull; 
            <a href="/search_query?q=<?php echo htmlspecialchars($_GET['q']); ?>&lclk=today">Today</a> &bull;
            <a href="/search_query?q=<?php echo htmlspecialchars($_GET['q']); ?>&lclk=featured_search">Featured</a>
            </span>
            <h1 style="display: inline-block;">Search results for "<?php echo htmlspecialchars($_GET['q']); ?>"</h1> <br>
            About <strong><?php echo number_format($result56); ?></strong> results<br><br>
            <?php
                $results_per_page = 20;

                $stmt = $conn->prepare("SELECT username FROM users WHERE lower(username) LIKE lower(?) ");
                $stmt->bind_param("s", $search);
                $stmt->execute();
                $result2 = $stmt->get_result();
                $results2 = $result2->num_rows;

                if(!isset($_GET['lclk'])) { 
                    $stmt = $conn->prepare("SELECT * FROM videos WHERE lower(title) LIKE lower(?) ");
                    $stmt->bind_param("s", $search);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    $results = $result->num_rows;
                } else {
                    if($_GET['lclk'] == "featured") { 
                        $stmt = $conn->prepare("SELECT * FROM videos WHERE featured = 'v'");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        $results = $result->num_rows;
                    } else if($_GET['lclk'] == "featured_search") {
                        $stmt = $conn->prepare("SELECT * FROM videos WHERE `featured` = 'v' AND lower(title) LIKE lower(?) ");
                        $stmt->bind_param("s", $search);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        $results = $result->num_rows;
                    } else if($_GET['lclk'] == "this_month") {
                        $stmt = $conn->prepare("SELECT * FROM videos WHERE `publish` >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) AND lower(title) LIKE lower(?) ");
                        $stmt->bind_param("s", $search);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        $results = $result->num_rows;
                    } else if($_GET['lclk'] == "this_week") {
                        $stmt = $conn->prepare("SELECT * FROM videos WHERE `publish` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND lower(title) LIKE lower(?) ");
                        $stmt->bind_param("s", $search);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        $results = $result->num_rows;
                    } else if($_GET['lclk'] == "today") {
                        $stmt = $conn->prepare("SELECT * FROM videos WHERE `publish` >= DATE_SUB(CURDATE(), INTERVAL 1 DAY) AND lower(title) LIKE lower(?) ");
                        $stmt->bind_param("s", $search);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        $results = $result->num_rows;
                    }
                }


                $number_of_result = $result->num_rows;
                $number_of_page = ceil ($number_of_result / $results_per_page);  

                if (!isset ($_GET['page']) ) {  
                    $page = 1;  
                } else {  
                    $page = (int)$_GET['page'];  
                }  

                $page_first_result = ($page - 1) * $results_per_page;  

                $stmt->close();

                if(!isset($_GET['lclk'])) { 
                    $stmt6 = $conn->prepare("SELECT * FROM videos WHERE lower(title) LIKE lower(?)  ORDER BY id DESC LIMIT ?, ?");
                    $stmt6->bind_param("sss", $search, $page_first_result, $results_per_page);
                    $stmt6->execute();
                    $result6 = $stmt6->get_result();
                } else {
                    if($_GET['lclk'] == "featured") { 
                        $stmt6 = $conn->prepare("SELECT * FROM videos WHERE featured = 'v' ORDER BY id DESC LIMIT ?, ?");
                        $stmt6->bind_param("ss", $page_first_result, $results_per_page);
                        $stmt6->execute();
                        $result6 = $stmt6->get_result();
                    } else if($_GET['lclk'] == "this_month") {
                        $stmt6 = $conn->prepare("SELECT * FROM videos WHERE `publish` >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) AND lower(title) LIKE lower(?)  ORDER BY id DESC LIMIT ?, ?");
                        $stmt6->bind_param("sss", $search, $page_first_result, $results_per_page);
                        $stmt6->execute();
                        $result6 = $stmt6->get_result();
                    } else if($_GET['lclk'] == "featured_search") {
                        $stmt6 = $conn->prepare("SELECT * FROM videos WHERE `featured` = 'v' AND lower(title) LIKE lower(?)  ORDER BY id DESC LIMIT ?, ?");
                        $stmt6->bind_param("sss", $search, $page_first_result, $results_per_page);
                        $stmt6->execute();
                        $result6 = $stmt6->get_result();
                    } else if($_GET['lclk'] == "this_week") {
                        $stmt6 = $conn->prepare("SELECT * FROM videos WHERE `publish` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND lower(title) LIKE lower(?)  ORDER BY id DESC LIMIT ?, ?");
                        $stmt6->bind_param("sss", $search, $page_first_result, $results_per_page);
                        $stmt6->execute();
                        $result6 = $stmt6->get_result();
                    } else if($_GET['lclk'] == "today") {
                        $stmt6 = $conn->prepare("SELECT * FROM videos WHERE `publish` >= DATE_SUB(CURDATE(), INTERVAL 1 DAY) AND lower(title) LIKE lower(?)  ORDER BY id DESC LIMIT ?, ?");
                        $stmt6->bind_param("sss", $search, $page_first_result, $results_per_page);
                        $stmt6->execute();
                        $result6 = $stmt6->get_result();
                    }
                }

                while($user = $result3->fetch_assoc()) { ?>
                    <div class="grid-item" style="animation: scale-up-recent 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
                        <img class="channel-pfp" src="/dynamic/pfp/<?php echo $user['pfp']; ?>"><br>
                        <a style="font-size: 10px;text-decoration: none;" href="/user/<?php echo htmlspecialchars($user['username']); ?>"><?php echo htmlspecialchars($user['username']); ?></a>
                    </div>
                <?php
                }


                while($video = $result6->fetch_assoc()) { 
                    $video['stars'] = $_video_fetch_utils->get_video_stars($video['rid']);
                    $video['star_1'] = $_video_fetch_utils->get_video_stars_level($video['rid'], 1);
                    $video['star_2'] = $_video_fetch_utils->get_video_stars_level($video['rid'], 2);
                    $video['star_3'] = $_video_fetch_utils->get_video_stars_level($video['rid'], 3);
                    $video['star_4'] = $_video_fetch_utils->get_video_stars_level($video['rid'], 4);
                    $video['star_5'] = $_video_fetch_utils->get_video_stars_level($video['rid'], 5);
                
                    //@$video['star_ratio'] = ($video['star_1'] + $video['star_2'] + $video['star_3'] + $video['star_4'] + $video['star_5']) / $video['stars'];
                
                    /* 
                        5 star - 252
                        4 star - 124
                        3 star - 40
                        2 star - 29
                        1 star - 33
                
                        totally 478 
                
                        (252*5 + 124*4 + 40*3 + 29*2 + 33*1) / (252 + 124 + 40 + 29 + 33)
                    */
                
                    if($video['stars'] != 0) {
                        @$video['star_ratio'] = (
                            $video['star_5'] * 5 + 
                            $video['star_4'] * 4 + 
                            $video['star_3'] * 3 + 
                            $video['star_2'] * 2 + 
                            $video['star_1'] * 1
                        ) / (
                            $video['star_5'] + 
                            $video['star_4'] + 
                            $video['star_3'] + 
                            $video['star_2'] + 
                            $video['star_1']
                        );
                
                        $video['star_ratio'] = floor($video['star_ratio'] * 2) / 2;
                    } else { 
                        $video['star_ratio'] = 0;
                    }
                    ?>
                     <div class="video-item">
                    <div class="thumbnail" style="
                        background-image: url(/dynamic/thumbs/<?php echo $video['thumbnail']; ?>), url('/dynamic/thumbs/default.png');"><span class="timestamp"><?php echo $_video_fetch_utils->timestamp($video['duration']); ?></span></div>
                    
                    <div class="video-info">
                        <a href="/watch?v=<?php echo $video['rid']; ?>"><b><?php echo htmlspecialchars($video['title']); ?></b></a><br>
                        <?php echo $_video_fetch_utils->parseTextNoLink($video['description']); ?><br>
                        <span class="video-info-small-wide">
                            <span class="stars-watch">
                            <?php if($video['star_ratio'] == 0) { // THIS SHIT FUCKING SUCKS I DON'T KNOW HOW TO MAKE IT ANY BETTER THOUGH ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 0.5) { ?>
                            <img src="/static/img/half_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 1) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 1.5) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/half_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 2) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 2.5) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/half_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 3) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 3.5) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/half_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 4) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/empty_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 4.5) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/half_star_s.png">
                            <?php } ?>
                            <?php if($video['star_ratio'] == 5) { ?>
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <img src="/static/img/full_star_s.png">
                            <?php } ?>
                            </span>

                            <span style="padding-left: 13px;" class="video-views"><?php echo $_video_fetch_utils->fetch_video_views($video['rid']); ?> views</span>
                            <a class="video-author-wide" href="/user/<?php echo htmlspecialchars($video['author']); ?>"><?php echo htmlspecialchars($video['author']); ?></a>
                        </span>
                    </div>
                    
                </div>
                <?php } ?>
            
                <?php for($page = 1; $page<= $number_of_page; $page++) { ?>
                <a href="search_query?q=<?php echo htmlspecialchars($_GET['q']); ?>&page=<?php echo $page ?>"><?php echo $page; ?></a>&nbsp;
                <?php } ?>    
        </div>
        <div class="www-core-container">
        <?php require($_SERVER['DOCUMENT_ROOT'] . "/static/module/footer.php"); ?>
        </div>

    </body>
</html>