<?php
include("config.php");
include("functions.php");
function getProfPic($user) {
global $api_key;
$infoList = json_decode(file_get_contents('https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id='.$user.'&key='.$api_key));
		  
foreach($infoList->items as $info){
	return $info->snippet->thumbnails->default->url;
}
}
?>
<html lang="en">
   <head>
<style>
.acct-box {
    position: fixed;
    right: 40px;
    top: 50px;
    margin: 0px!important;
    display: none;
    width: 235px;
    background-image: linear-gradient(to bottom,#fafafa 0,#dcdcdc 100%);
    box-shadow: inset 0 0 1px #fff;
    padding: 5px;
    width: 281px;
    background: #f1f1f1!important;
    border: 1px solid #e5e5e5;
    z-index: 998;
}
.acct-box[visible] {
    display: block;
}
#yt-masthead-container[fixed] {
    position: fixed;
    top: 0px;
    width: 100%;
    Z-index: 999;
}
#masthead-filler {
    display: none;
}
#masthead-filler[filling] {
    display: block!important;
    height: 51px!important;
}
</style>
<script>
function openActBox () {
    if(document.querySelector(".acct-box").hasAttribute("visible")) {
        document.querySelector("#yt-masthead-container").removeAttribute("fixed");
        document.querySelector(".acct-box").removeAttribute("visible");
        document.querySelector("#masthead-filler").removeAttribute("filling");
    } else {
        document.querySelector(".acct-box").setAttribute("visible","");
        document.querySelector("#yt-masthead-container").setAttribute("fixed","");
        document.querySelector("#masthead-filler").setAttribute("filling","");
    }
}
</script>
      <link id="css-2783428260" rel="stylesheet" href="./asset/base.css">
   </head>
   <body dir="ltr" class="  ltr        site-left-aligned    exp-new-site-width exp-watch7-comment-ui hitchhiker-enabled
      guide-enabled    guide-expanded">
      <div id="body-container">
      <div id="masthead-filler"></div>
      <div id="yt-masthead-container" class="yt-grid-box yt-masthead-hh">
         <div id="yt-masthead" class="">
            <a id="logo-container" href="./" title="YouTube home"><img id="logo" src="//web.archive.org/web/20121230023058im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="YouTube home"></a>
            <div id="yt-masthead-signin"><?php if(!isset($_SESSION['siteusername'])) { ?>
    <button onclick=";window.location.href=this.getAttribute('href');return false;" type="button" class=" yt-uix-button yt-uix-button-hh-primary" href="/2013/sign_in" role="button"><span class="yt-uix-button-content">Sign in </span></button>
<?php } else { ?>
    <a class="masthead-user masthead-signed-in" onclick="openActBox()" style="text-decoration: none!important;">
        <div class="signed-in-header" style="display: flex;align-items: center;">
            <span id="masthead-username" style="color: black;"><?php echo htmlspecialchars($_SESSION['siteusername']); ?></span>
            <img src="/dynamic/pfp/<?php echo $_user_fetch_utils->fetch_user_pfp($_SESSION['siteusername']); ?>" class="profile_pic_mini" style="width:32px;margin-left:10px;background:white;">
        </div>
    </a>
<?php } ?></div>
            <div id="yt-masthead-content">
               <span id="masthead-upload-button-group"><a href="./upload_video" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-default" data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D"><span class="yt-uix-button-content">Upload</span></a></span>
               <form id="masthead-search" class="search-form consolidated-form"
action="./results" onsubmit="if (_gel('masthead-search-term').value == '') return false;">
                  <button onclick="if (_gel('masthead-search-term').value == '') return false; _gel('masthead-search').submit(); return false;;return true;" id="search-btn" dir="ltr" tabindex="2" type="submit" class="search-btn-component search-button yt-uix-button yt-uix-button-hh-default" role="button"><span class="yt-uix-button-content">Search </span></button>
                  <div id="masthead-search-terms" class="masthead-search-terms-border " dir="ltr"><label><input id="masthead-search-term" value="<?php echo $_GET['search_query']; ?>" class="search-term" name="search_query" value="" type="text" tabindex="1" onkeyup="goog.i18n.bidi.setDirAttribute(event,this)" title="Search" dir="ltr" autocomplete="off" spellcheck="false" style="outline: none;"></label></div>
                  <input type="hidden" name="oq"><input type="hidden" name="gs_l">
               </form>
            </div>
         </div>
      </div>
      <div id="page-container">
      <div id="page" class="  home     branded-page-v2-detached-top ">
      <?php require($_SERVER['DOCUMENT_ROOT'] . "/2013/static/acctBox.php"); ?>
