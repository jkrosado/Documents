<?php
include("config.php");
include("functions.php");
    if(file_get_contents('https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=5&chart=mostPopular&key='.$api_key) == null) {
        echo "This site has exceeded its daily quota. Come back later.";
        die();
    }
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
      <link id="css-2783428260" rel="stylesheet" href="./asset/base.css">
   </head>
   <body dir="ltr" class="  ltr        site-left-aligned    exp-new-site-width exp-watch7-comment-ui hitchhiker-enabled
      guide-enabled    guide-expanded">
      <div id="body-container">
      <div id="yt-masthead-container" class="yt-grid-box yt-masthead-hh">
         <div id="yt-masthead" class="">
            <a id="logo-container" href="./" title="YouTube home"><img id="logo" src="//web.archive.org/web/20121230023058im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="YouTube home"></a>
            <div id="yt-masthead-signin"><button onclick=";window.location.href=this.getAttribute('href');return false;" type="button" class=" yt-uix-button yt-uix-button-hh-primary" href="https://accounts.google.com/ServiceLogin?hl=en_US&amp;service=youtube&amp;uilel=3&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3Dsign_in_button%26hl%3Den_US%26next%3D%252F%26nomobiletemp%3D1&amp;passive=true" role="button"><span class="yt-uix-button-content">Sign in </span></button></div>
            <div id="yt-masthead-content">
               <span id="masthead-upload-button-group"><a href="https://www.youtube.com/my_videos_upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-default" data-sessionlink="ei=CPyeyIWLwbQCFZkQIQodPx8kow%3D%3D"><span class="yt-uix-button-content">Upload</span></a></span>
               <form id="masthead-search" class="search-form consolidated-form" action="./results" onsubmit="if (_gel('masthead-search-term').value == '') return false;">
                  <button onclick="if (_gel('masthead-search-term').value == '') return false; _gel('masthead-search').submit(); return false;;return true;" id="search-btn" dir="ltr" tabindex="2" type="submit" class="search-btn-component search-button yt-uix-button yt-uix-button-hh-default" role="button"><span class="yt-uix-button-content">Search </span></button>
                  <div id="masthead-search-terms" class="masthead-search-terms-border " dir="ltr"><label><input id="masthead-search-term" class="search-term" name="search_query" value="" type="text" tabindex="1" onkeyup="goog.i18n.bidi.setDirAttribute(event,this)" title="Search" dir="ltr" autocomplete="off" spellcheck="false" style="outline: none;"></label></div>
                  <input type="hidden" name="oq"><input type="hidden" name="gs_l">
               </form>
            </div>
         </div>
      </div>
      <div id="page-container">
      <div id="page" class="  home     branded-page-v2-detached-top ">
