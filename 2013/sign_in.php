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
?>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/2013/static/guide.php"); ?>
<!DOCTYPE html>
<html>
    <head>
<style>
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
    margin-top: 50px;
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
        <?php
            if($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['password'] && $_POST['username']) {
                $username = htmlspecialchars(@$_POST['username']);
                $password = @$_POST['password'];
                $passwordhash = password_hash(@$password, PASSWORD_DEFAULT);

                $stmt = $conn->prepare("SELECT password FROM `users` WHERE username = ?");
                $stmt->bind_param("s", $username);
                $stmt->execute();
                $result = $stmt->get_result();
                if(!mysqli_num_rows($result)){ { $error = "Incorrect username or password!"; goto skip; } }
                $row = $result->fetch_assoc();
                $hash = $row['password'];

                if(!password_verify($password, $hash)){ $error = "Incorrect username or password!"; goto skip; }
                $_SESSION['siteusername'] = $username;

                echo "<script>
                window.location = '/2013';
                </script>";
            }
            skip:
        ?>
    </head>
    <body>
        <div class="www-core-container">
            <?php require($_SERVER['DOCUMENT_ROOT'] . "/2013/static/header.php"); ?>
            <div style="margin: 12px 0 0;padding: 20px 25px 15px;width: 335px; background: #f1f1f1;border: 1px solid #e5e5e5;" class="sign-in-form-box">
<h2 style="font-size: 16px;line-height: 17px;height: 16px;margin: 0 0 1.2em;position: relative;">Sign In</h2>
            <form action="" method="post" id="submitform">
                <span style="color: red; font-size: 12px;" id="pwwarnings"></span><span style="color: red; font-size: 12px;" id="specialchars"></span>
                <?php if(isset($error)) { echo $error . "<br>";}?>
                <table>
                    <tbody>
                        <tr class="username">
                            <td class="label"><label for="username"> Username: </label></td>
                        <td class="input"><input style="border: 1px solid #a0a0a0; padding: 3px;" name="username" type="text" required id="username"></td>
                        </tr>
                        <tr class="password">
                            <td class="label"><label for="password"> Password: </label></td>
                            <td class="input"><input style="border: 1px solid #a0a0a0; padding: 3px;" name="password" type="password" required id="password"></td>
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
                            <td colspan="2"><br><input style="
                                                        position: relative;
                                height: 2.95em;
                                width: 100%;
                                padding: 0 .91em;
                                border: 1px solid;
                                outline: 0;
                                font-weight: 700;
                                font-size: 11px;
                                white-space: nowrap;
                                word-wrap: normal;
                                vertical-align: middle;
                                cursor: pointer;
                                *overflow: visible;
                                -moz-border-radius: 2px;
                                -webkit-border-radius: 2px;
                                border-radius: 2px;    text-shadow: 0 1px 0 #fff;
                                border-color: #ccc #ccc #aaa;
                                background-color: #e0e0e0;
                                -moz-box-shadow: inset 0 0 1px #fff;
                                -ms-box-shadow: inset 0 0 1px #fff;
                                -webkit-box-shadow: inset 0 0 1px #fff;
                                box-shadow: inset 0 0 1px #fff;
                                filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#fffafafa,EndColorStr=#ffdcdcdc);
                                background-image: -moz-linear-gradient(top,#fafafa 0,#dcdcdc 100%);
                                background-image: -ms-linear-gradient(top,#fafafa 0,#dcdcdc 100%);
                                background-image: -o-linear-gradient(top,#fafafa 0,#dcdcdc 100%);
                                background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#fafafa),color-stop(100%,#dcdcdc));
                                background-image: -webkit-linear-gradient(top,#fafafa 0,#dcdcdc 100%);
                                background-image: linear-gradient(to bottom,#fafafa 0,#dcdcdc 100%);
                            " type="submit" value="Log in">
                            </td>
                        </tr>
                        <tr class="forgot">
                        </tr>
                    </tbody>
                </table>
...or <a href="./create_account">sign up</a> instead.
            </div>
            <img src="/static/img/ytfav.png" style=" vertical-align: top;"> <span class="login-benifits-span"><h3 class="not-bold">Keep up with your favorite channels</h3><p class="nomargin">Save videos to watch later, watch recommendations just for you, or subscribe to get updates <br>from your favorite channels. </p></span><br>
            <img src="/static/img/ytonzgo.png" style=" vertical-align: top;"> <span class="login-benifits-span"><h3 class="not-bold">Watch everywhere </h3><p class="nomargin">Take your picks with you wherever you go — watch on your smartphone, tablet, or smart TV. </p></span><br>
            <img src="/static/img/ytwfrnz.png" style=" vertical-align: top;"> <span class="login-benifits-span"><h3 class="not-bold">Share with your friends </h3><p class="nomargin">See videos shared by your friends across all your social networks — all in one place. </p></span>
        </div><br><br>
        <div class="www-core-container">
        </div>
    </body>
<?php require($_SERVER['DOCUMENT_ROOT'] . "/2013/static/footer.php"); ?>
</html>