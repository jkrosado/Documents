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

  $_base_utils->initialize_page_compass("Homepage");
?>
<!DOCTYPE html>
<html>
    <head>
        <title>FulpTube - <?php echo $_base_utils->return_current_page(); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/static/css/www-core.css">
    </head>
    <body>
        <div class="www-core-container" style="height: 2034px;">
            <?php require($_SERVER['DOCUMENT_ROOT'] . "/old/static/module/header.php"); ?>
            <div class="www-home-left">
                <div class="home-topleft-signin">
                    <h2>Sign in to add channels to your homepage </h2><br>
                    <a href="/sign_in"><button class="www-button www-button-dark">Sign In</button></a><br>
                    <a href="/create_account"><button class="www-button www-button-primary">Create Account</button></a>
                </div>
                <div class="home-topright-header">
                    <img src="/static/img/guide.png" class="guide-topic"> <span style="padding: 5px;">Film & Animation</span>
                </div>
                <div class="featured-left-panel">
                    <ul>
                        <li onclick="window.location.pathname = '/old';">
                            <img src="/static/img/categories/star.png"> <span>From FulpTube</span>
                        </li>
                        <li class="active" onclick="window.location.pathname = '/old/category/1/';">
                            <img src="/static/img/categories/star.png"> <span>Film & Animation</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/2/';">
                            <img src="/static/img/categories/star.png"> <span>Autos & Vehicles</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/3/';">
                            <img src="/static/img/categories/star.png"> <span>Music</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/4/';">
                            <img src="/static/img/categories/star.png"> <span>Pets & Animals</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/5/';">
                            <img src="/static/img/categories/star.png"> <span>Sports</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/6/';">
                            <img src="/static/img/categories/star.png"> <span>Travel & Events</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/7/';">
                            <img src="/static/img/categories/star.png"> <span>Gaming</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/8/';">
                            <img src="/static/img/categories/star.png"> <span>People & Blogs</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/9/';">
                            <img src="/static/img/categories/star.png"> <span>Comedy</span>
                        </li>
                        <li onclick="window.location.pathname = '/old/category/10/';">
                            <img src="/static/img/categories/star.png"> <span>Entertainment</span>
                        </li>
                    </ul>
                </div><br>
                <div class="featured-left-panel-extra">
                 
                </div>
                <div class="feed-homepage">
                    <?php
                        $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE category = 'Film & Animation' ORDER BY id DESC LIMIT 20");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        while($video = $result->fetch_assoc()) { 
                    ?> 
                    <div class="video-item">
                        <div class="video-thumbnail r120" 
                        style="background-image: url('/dynamic/thumbs/<?php echo $video['thumbnail']; ?>'), url('/dynamic/thumbs/default.png');">
                            <div class="video-timestamp">
                                <span>
                                <?php echo $_video_fetch_utils->timestamp($video['duration']); ?>
                                </span>
                            </div>
                        </div>
                        <span class="video-info">
                            <b><a href="/old/watch?v=<?php echo $video['rid']; ?>"><?php echo htmlspecialchars($video['title']); ?></a></b> <span class="video-time-ago"><?php echo $_video_fetch_utils->time_elapsed_string($video['publish']); ?></span>
                            <br>
                            <small>
                                <p>
                                    <?php echo $_video_fetch_utils->parseTextNoLink($video['description']); ?>
                                </p>
                            <a style="color: #555; text-decoration: none;" href="/old/channel?n=<?php echo htmlspecialchars($video['author']); ?> ">
                                <?php echo htmlspecialchars($video['author']); ?> 
                            </a>
                            &bull; 
                            <?php echo $_video_fetch_utils->get_video_views($video['rid']); ?> views<br>
                            </small>
                        </span>
                    </div>
                    <?php } ?>
                </div>
            </div>
            <div class="www-home-right">
                <span class="spotlight-text">
                Spotlight
                </span><br>
                <h2 class="light-black spotlight-header">fulptube is back</h2>
                <span class="spotlight-text">
                since bhief scrapped fulptube, i'm bringing it back. my shitty php code is going to hold fulptube together for now.
                </span>
                <p class="spotlight-text">Presented by: <a class="no-underline dark-link" href="/old/channel?n=john">«John»</a>
                <hr class="divider-home-right">
                <span class="spotlight-text">
                Featured Content
                </span><br>
                <?php
                    $stmt = $conn->prepare("SELECT rid, title, thumbnail, duration, title, author, publish, description FROM videos WHERE visibility = 'v' AND featured = 'v' ORDER BY id DESC LIMIT 20");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    while($video = $result->fetch_assoc()) { 
                ?> 
                <div class="video-item">
                    <div class="video-thumbnail r120" 
                    style="background-image: url('/dynamic/thumbs/<?php echo $video['thumbnail']; ?>'), url('/dynamic/thumbs/default.png');">
                        <div class="video-timestamp">
                            <span>
                            <?php echo $_video_fetch_utils->timestamp($video['duration']); ?>
                            </span>
                        </div>
                    </div>
                    <span class="video-info">
                        <b><a href="/old/watch?v=<?php echo htmlspecialchars($video['rid']); ?> "><?php echo htmlspecialchars($video['title']); ?> </a></b><br>
                        by <?php echo htmlspecialchars($video['author']); ?> <br>
                        <?php echo $_video_fetch_utils->get_video_views($video['rid']); ?> views
                    </span>
                </div>
                <?php } ?>
            </div>
        </div>
        <div class="www-core-container">
        <?php require($_SERVER['DOCUMENT_ROOT'] . "/old/static/module/footer.php"); ?>
        </div>

    </body>
</html>