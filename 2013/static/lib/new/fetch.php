<?php
/**
 * Use this to fetch data for users.
 *
 * Blah blah blah blah.
 *
 * @copyright  FulpTube
 * @since      Class available since FulpTube backend rewrite 5/9/21
 */ 
class user_fetch_utils {
    public $conn;
    function initialize_db_var($conn) {
        $this->conn = $conn;    
    }

    function initialize_server_vars($server) {
        $this->server = $server;    
    }

    function fetch_user_username($username) {
            $stmt = $this->conn->prepare("SELECT * FROM users WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if($result->num_rows === 0) 
            return 0;
        else
            return $user;

        $stmt->close();
    }

    function if_subscribed($user, $reciever) {
        $stmt = $this->conn->prepare("SELECT `reciever` FROM subscribers WHERE sender = ? AND reciever = ?");
        $stmt->bind_param("ss", $user, $reciever);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();
        if($result->num_rows === 1) { return true; } else { return false; }
        $stmt->close();
        
        return $user;
    }

    function if_liked_video($user, $videoid) {
        $stmt = $this->conn->prepare("SELECT `sender` FROM likes WHERE sender = ? AND reciever = ? AND type = 'l'");
        $stmt->bind_param("ss", $user, $videoid);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();
        if($result->num_rows === 1) { return true; } else { return false; }
        $stmt->close();
        
        return $user;
    }

    function get_unread_pms($username) {
        $stmt = $this->conn->prepare("SELECT * FROM pms WHERE touser = ? AND readed = 'n'");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = mysqli_num_rows($result); 
        $stmt->close();
    
        return $rows;
    }

    function get_user_from_username($name) {
            $stmt = $this->conn->prepare("SELECT * FROM users WHERE username = ?");
            $stmt->bind_param("s", $name);
            $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();
        if($result->num_rows === 0) return('That user does not exist.');
        $stmt->close();

        return $user;
    }


    function fetch_subs_count($username) {
        $stmt = $this->conn->prepare("SELECT * FROM subscribers WHERE reciever = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = mysqli_num_rows($result); 
        $stmt->close();
    
        return $rows;
    }
    
    function fetch_user_pfp($username) {
        $stmt = $this->conn->prepare("SELECT pfp FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        while($row = $result->fetch_assoc()) {
            $pfp = $row['pfp'];
        }
        
        //fallback for deleted accs
        if(!isset($pfp)) {
            return "default.png";
        } else {
            return $pfp;
        }
        
        $stmt->close();
    }
}

/**
 * Use this to fetch data for videos.
 *
 * Blah blah blah blah.
 *
 * @copyright  FulpTube
 * @since      Class available since FulpTube backend rewrite 5/9/21
 */ 
class video_fetch_utils {
    public $conn;
    function initialize_db_var($conn) {
        $this->conn = $conn;    
    }

    function initialize_server_vars($server) {
        $this->server = $server;    
    }

    function get_video_likes($id) {
        $stmt = $this->conn->prepare("SELECT * FROM likes WHERE reciever = ? AND type = 'l'");
        $stmt->bind_param("s", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = mysqli_num_rows($result); 
        $stmt->close();
    
        return $rows;
    }    
    

    function get_video_dislikes($id) {
        $stmt = $this->conn->prepare("SELECT * FROM likes WHERE reciever = ? AND type = 'd'");
        $stmt->bind_param("s", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = mysqli_num_rows($result); 
        $stmt->close();
    
        return $rows;
    }

    function fetch_videos_from_user($user) {
        $stmt = $this->conn->prepare("SELECT rid FROM videos WHERE author = ? AND visibility = 'v'");
        $stmt->bind_param("s", $user);
        $stmt->execute(); 
        $result = $stmt->get_result();
        $rows = mysqli_num_rows($result); 
        $stmt->close();
    
        return $rows;
    }

    function time_elapsed_string($datetime, $full = false) {
        global $cLang;
        $now = new DateTime;
        $ago = new DateTime($datetime);
        $diff = $now->diff($ago);
    
        $diff->w = floor($diff->d / 7);
        $diff->d -= $diff->w * 7;
    
        if(!isset($cLang)) {
            $string = array(
                'y' => 'year',
                'm' => 'month',
                'w' => 'week',
                'd' => 'day',
                'h' => 'hour',
                'i' => 'minute',
                's' => 'second',
            );
        } else {
            $string = array(
                'y' => $cLang['year'],
                'm' => $cLang['month'],
                'w' => $cLang['week'],
                'd' => $cLang['day'],
                'h' => $cLang['hour'],
                'i' => $cLang['minute'],
                's' => $cLang['second'],
            );
        }
    
        if(!isset($cLang)) {
            foreach ($string as $k => &$v) {
                if ($diff->$k) {
                    $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
                } else {
                    unset($string[$k]);
                }
            }
        } else {
            foreach ($string as $k => &$v) {
                if ($diff->$k) {
                    $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? $cLang['pluralTimeRight'] : '');
                } else {
                    unset($string[$k]);
                }
            }
        }
    
        if(!isset($cLang)) {
            if (!$full) $string = array_slice($string, 0, 1);
            return $string ? implode(', ', $string) . ' ago' : 'just now';
        } else {
            if (!$full) $string = array_slice($string, 0, 1);
            return $string ? implode($cLang['agoLeft'], $string) . " " . " " . $cLang['agoRight'] : $cLang['justNow'];
        }
    }

    function fetch_video_rid(string $rid) {
            $stmt = $this->conn->prepare("SELECT * FROM videos WHERE rid = ?");
            $stmt->bind_param("s", $rid);
            $stmt->execute();
        $result = $stmt->get_result();
        $video = $result->fetch_assoc();

        if($result->num_rows === 0) 
            return 0;
        else
            return $video;

        $stmt->close();
    }

    function get_video_views(string $rid) {
            $stmt = $this->conn->prepare("SELECT * FROM views WHERE videoid = ?");
            $stmt->bind_param("s", $rid);
            $stmt->execute();
        $result = $stmt->get_result();
        return $result->num_rows;

        $stmt->close();
    }

    function fetch_less_video_rid(string $rid) {
            $stmt = $this->conn->prepare("SELECT rid, title, thumbnail, duration, title, author FROM videos WHERE rid = ?");
            $stmt->bind_param("s", $rid);
            $stmt->execute();
        $result = $stmt->get_result();
        $video = $result->fetch_assoc();

        if($result->num_rows === 0) 
            return 0;
        else
            return $video;

        $stmt->close();
    }

    function fetch_video_views(string $vidid) {
        $stmt = $this->conn->prepare("SELECT * FROM views WHERE videoid = ?");
        $stmt->bind_param("s", $vidid);
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = mysqli_num_rows($result); 
        $stmt->close();
    
        return $rows;
    }

    function fetch_views_from_user($user) {
        $stmt = $this->conn->prepare("SELECT `rid` FROM videos WHERE author = ?");
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $result = $stmt->get_result();
        $views = 0;
        while($row = $result->fetch_assoc()) {
            $views = $views + $this->fetch_video_views($row['rid']);
        }
        return $views;
        $stmt->close();
    }

    function fetch_user_videos(string $id) {
        $stmt = $this->conn->prepare("SELECT rid FROM videos WHERE author = ? AND visibility = 'v'");
        $stmt->bind_param("s", $id);
        $stmt->execute(); 
        $result = $stmt->get_result();
        $rows = mysqli_num_rows($result); 
        $stmt->close();
    
        return $rows;
    }

    function timestamp(int $seconds) {
        if ($seconds > 60*60*24) {
            // over a day
            return sprintf("%d:%s:%s:%s",
                floor($seconds/60/60/24),                                 // Days
                str_pad( floor($seconds/60/60%24), 2, "0", STR_PAD_LEFT), // Hours
                str_pad( floor($seconds/60%60),    2, "0", STR_PAD_LEFT), // Minutes
                str_pad(       $seconds%60,        2, "0", STR_PAD_LEFT)  // Seconds
            );
        } else if ($seconds > 60*60) {
            // over an hour
            return sprintf("%d:%s:%s",
                        floor($seconds/60/60),                        // Hours
                str_pad(floor($seconds/60%60), 2, "0", STR_PAD_LEFT), // Minutes
                str_pad(      $seconds%60,     2, "0", STR_PAD_LEFT)  // Seconds
            );
        } else {
            // less than an hour
            return sprintf("%d:%s",
                        floor($seconds/60),                       // Minutes
                str_pad(      $seconds%60,  2, "0", STR_PAD_LEFT) // Seconds
            );
        }
    }

    function parseTextNoLink($text) {
        $text = htmlspecialchars($text);
        $text = str_replace(PHP_EOL, "<br>", $text);
        return $text;
    }    
}
?>