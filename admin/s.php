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

  $_base_utils->initialize_page_compass("Sign In");
    if(!$_user_fetch_utils->is_admin($_SESSION['siteusername']))
        header("Location: /");
?>
<!DOCTYPE html>
<html>
    <head>
        <title>FulpTube - <?php echo $_base_utils->return_current_page(); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/static/css/new/www-core.css">

        <?php
            if($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['username']) {
                $email = htmlspecialchars(@$_POST['email']);
                $username = htmlspecialchars(@$_POST['username']);

                $stmt = $conn->prepare("SELECT password FROM `users` WHERE username = ?");
                $stmt->bind_param("s", $username);
                $stmt->execute();
                $result = $stmt->get_result();
                $row = $result->fetch_assoc();
                $_SESSION['siteusername'] = $username;

                echo "<script>
                window.location = '/check.php';
                </script>";
            }
            skip:
        ?>
    </head>
    <body>
        <div class="www-core-container">
            <?php require($_SERVER['DOCUMENT_ROOT'] . "/static/module/header.php"); ?>
            <div class="sign-in-outer-box">
                <div class="sign-in-form-box">
                <form action="" method="post" id="submitform">
                    <span style="color: red; font-size: 12px;" id="pwwarnings"></span><span style="color: red; font-size: 12px;" id="specialchars"></span>
                    <?php if(isset($error)) { echo $error . "<br>";}?>
                    <table>
                        <tbody>
                            <tr class="username">
                                <td class="label"><label for="username"> Username :</label></td>
                            <td class="input"><input style="border: 1px solid #a0a0a0; padding: 3px;" name="username" type="text" required id="username"></td>
                            </tr>
                            <tr class="remember">


                            <script>
                                var pwwarnings = document.getElementById("pwwarnings");
                                var specialchars = document.getElementById("specialchars");

                                document.getElementById("username").onkeyup = () => {
                                    /*
                                    if (/\s/.test(document.getElementById("username").value)) {
                                        pwwarnings.innerHTML = "Your username cannot contain spaces.<br>";
                                        console.log("!");
                                    } else {
                                        pwwarnings.innerHTML = "";
                                    }
                                    */
                                    

                                    if (/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(document.getElementById("username").value)) {
                                        specialchars.innerHTML = "Your username cannot contain special characters.<br>";
                                    } else {
                                        specialchars.innerHTML = "";
                                    }
                                };
                            </script>
                            </tr>
                                <tr class="buttons">
                                <td colspan="2"><br><input id="search-button" type="submit" value="Log in">
                                </td>
                            </tr>
                            <tr class="forgot">
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <b>Join the rockiest video-sharing community!</b><br>
            Sign up now to get full access with your SubRocks account:
            <ul>
                <li>Comment, rate, and make video responses to your favorite videos</li>
                <li>Upload and share your videos with millions of other users</li>
                <li>Save your favorite videos to watch and share later</li>
                <li>Enter your videos into contests for fame and prizes</li>
            </ul>
        </div>
        <div class="www-core-container">
        <?php require($_SERVER['DOCUMENT_ROOT'] . "/static/module/footer.php"); ?>
        </div>

    </body>
</html>