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

    header('Content-Type: application/json; charset=utf-8');

    function get_percentage($total, $number)
    {
      if ( $total > 0 ) {
       return round($number / ($total / 100),2);
      } else {
        return 0;
      }
    }


    if(!$_video_fetch_utils->video_exists($_GET['v'])) {
        echo '{"Error":"You did not supply an argument, or no video by this name exists."}';
        die();
    }

    $_video = $_video_fetch_utils->fetch_video_rid($_GET['v']);
    $_video['liked'] = $_user_fetch_utils->if_liked_video(@$_SESSION['siteusername'], $_video['rid']);
    $_video['disliked'] = $_user_fetch_utils->if_disliked_video(@$_SESSION['siteusername'], $_video['rid']);
    $_video['subscribed'] = $_user_fetch_utils->if_subscribed(@$_SESSION['siteusername'], $_video['author']);
    $videoLink = "/dynamic/videos/" . $_video['filename'];
    $videoLink240 = "/dynamic/videos/" . $_video['rid'] . "_240.mp4";

    $videoLinks = array(
    "720" => $videoLink,
    "240" => $videoLink240,
    );

    $totalCount = $_video_fetch_utils->get_video_likes($_GET['v']) + $_video_fetch_utils->get_video_dislikes($_GET['v']);
    $likePercentage = get_percentage($totalCount, $_video_fetch_utils->get_video_likes($_GET['v']));
    $dislikePercentage = get_percentage($totalCount, $_video_fetch_utils->get_video_dislikes($_GET['v']));
    
    $ratings = array(
        "likes" => $_video_fetch_utils->get_video_likes($_GET['v']),
        "dislikes" => $_video_fetch_utils->get_video_dislikes($_GET['v']),
        "likePercent" => $likePercentage,
        "dislikePercent" => $dislikePercentage,
    );

    $allComments = array(
    );

    $stmt = $conn->prepare("SELECT * FROM comments WHERE toid = ? ORDER BY id DESC");
    $stmt->bind_param("s", $_GET['v']);
    $stmt->execute();
    $result = $stmt->get_result();
    while($comment = $result->fetch_assoc()) {
        $comments = 
            array(
                $comment['id'] => array("author" => $comment['author'],"content" => $comment['comment'],"date" => $comment['date'],"likes" => number_format($_video_fetch_utils->fetch_comment_likes($comment['id'])),)
            );
            $testCmt = array("author" => $comment['author'],"content" => $comment['comment'],"date" => $comment['date'],"likes" => number_format($_video_fetch_utils->fetch_comment_likes($comment['id'])),);
            array_push($allComments, $testCmt);
    }

    if($result->num_rows == 0) {
        $vidComments = "No Comments";
    } else {
        $vidComments = $allComments;
    }

    $authorPfp = "/dynamic/pfp/" . $_user_fetch_utils->fetch_user_pfp($_video['author']);

    $videoAuthor = array(
        "username" => $_video['author'],
        "pfp" => $authorPfp,
    );

    $jsonData = array(
        "title" => $_video['title'],
        "author" => $videoAuthor,
        "description" => $_video['description'],
        "publish" => $_video['publish'],
        "duration" => $_video['duration'],
        "vidUrls" => $videoLinks,
        "thumb" => $_video['thumbnail'],
        "comments" => $vidComments,
        "ratings" => $ratings
    );


    echo json_encode($jsonData);
?>