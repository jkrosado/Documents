<?php
$userHdr = $_user_fetch_utils->fetch_user_username($_SESSION['siteusername']);
?>
<div class="acct-box" style="margin: 12px 0 0;padding: 20px 25px 15px;width: 250px; background: #f1f1f1;border: 2px solid #e5e5e5;">
           <div class="acct-set-container"></div>
<div class="userinfo" style="display: flex;"><a href="/channel?n=<?php echo htmlspecialchars($_SESSION['siteusername']); ?>"><img src="/dynamic/pfp/<?php echo $userHdr['pfp']; ?>" style="width: 50px; height: 50px; background-color: white;"></a><div style="display: flex;flex-direction: column;margin-left: 10px;"><a href="/channel?n=<?php echo htmlspecialchars($_SESSION['siteusername']); ?>" class="username" style="font-size: 16px;color: black;text-decoration: none!important;"><b><?php echo htmlspecialchars($_SESSION['siteusername']); ?></b></a><p class="subscount" style="padding-top: 5px;"><?php echo $_user_fetch_utils->fetch_subs_count($_SESSION['siteusername']); ?> subscribers</p><a style="padding-top: 5px;" href="/video_manager">Creator Studio</a></div></div>
<div style="margin-top: 10px;" class="logout"><a href="/static/logout" style="
    background-color: #f8f8f8!important;
    padding: 7px;
    display: inline-block;
    border: 1px solid #c6c6c6!important;
    color: #333!important;
    font-weight: bold!important;
    font-size: 12px!important;
    vertical-align: middle;
    cursor: pointer;
    text-decoration: none!important;
">Log out</a><a href="/watchlater" style="
    margin-left: 10px;
    background-color: #f8f8f8!important;
    padding: 7px;
    display: inline-block;
    border: 1px solid #c6c6c6!important;
    color: #333!important;
    font-weight: bold!important;
    font-size: 12px!important;
    vertical-align: middle;
    cursor: pointer;
    text-decoration: none!important;
">Watch Later</a><a href="/account_settings" style="
    margin-left: 10px;
    background-color: #f8f8f8!important;
    padding: 7px;
    display: inline-block;
    border: 1px solid #c6c6c6!important;
    color: #333!important;
    font-weight: bold!important;
    font-size: 12px!important;
    vertical-align: middle;
    cursor: pointer;
    text-decoration: none!important;
">Settings</a></div>
            </div>