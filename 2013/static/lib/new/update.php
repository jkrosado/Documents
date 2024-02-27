<?php
/**
 * Use this to update data for users.
 *
 * Blah blah blah blah.
 *
 * @copyright  FulpTube
 * @since      Class available since FulpTube backend rewrite 5/9/21
 */ 
class user_update_utils {
    public $conn;
    function initialize_db_var($conn) {
        $this->conn = $conn;    
    }

    function initialize_server_vars($server) {
        $this->server = $server;    
    } 

    function update_user_bio($username, $bio) {
        $stmt = $this->conn->prepare("UPDATE users SET bio = ? WHERE username = ?");
        $stmt->bind_param("ss", $bio, $username);
        $stmt->execute();
        $stmt->close();
        
        return true;
    }
    
    function update_user_channels($username, $bio) {
        $stmt = $this->conn->prepare("UPDATE users SET featuredchannels = ? WHERE username = ?");
        $stmt->bind_param("ss", $bio, $username);
        $stmt->execute();
        $stmt->close();
        
        return true;
    }

    function update_user_margin_top($username, $type) {
        $stmt = $this->conn->prepare("UPDATE users SET bannerdp = ? WHERE username = ?");
        $stmt->bind_param("ss", $type, $username);
        $stmt->execute();
    $stmt->close();
    
    return true;
    }    

    function update_user_featured_video($username, $bio) {
        $stmt = $this->conn->prepare("UPDATE users SET featured = ? WHERE username = ?");
        $stmt->bind_param("ss", $bio, $username);
        $stmt->execute();
        $stmt->close();

        return true;
    }

    function update_user_featured_title($username, $bio) {
        $stmt = $this->conn->prepare("UPDATE users SET customchannelfeatured = ? WHERE username = ?");
        $stmt->bind_param("ss", $bio, $username);
        $stmt->execute();
    $stmt->close();
    
    return true;
    }

    function update_user_banner_display($username, $type) {
        $stmt = $this->conn->prepare("UPDATE users SET bannerdp = ? WHERE username = ?");
        $stmt->bind_param("ss", $type, $username);
        $stmt->execute();
    $stmt->close();
    
    return true;
    }
}

/**
 * Use this to update data for videos.
 *
 * Blah blah blah blah.
 *
 * @copyright  FulpTube
 * @since      Class available since FulpTube backend rewrite 5/9/21
 */ 
class video_update_utils {
    public $conn;
    function initialize_db_var($conn) {
        $this->conn = $conn;    
    }

    function initialize_server_vars($server) {
        $this->server = $server;    
    }
}
?>