<div class="www-header-mast" style="display: inline-flex;width: -webkit-fill-available;width: -moz-available;">
    <a href="/old"><img src="/old/static/img/fulptube.png" class="www-logo"></a>
    <form id="search-header" class="www-header-search" action="/old/search" style="display: inline-flex;align-items: center!important;">
        <input type="text" class="www-search-bar" name="search_query"><button type="submit" style="height: 34px; border-top-left-radius: 0px;margin-left: 0px;border-left: 0px;" id="btn-search" class="www-button www-button-grey"><img src="/old/static/img/search_icon.png"></button>
        <a href="/browse" class="www-header-links">Browse</a> <span class="www-seperator">|</span> <a href="/old/upload_video" class="www-header-links">Upload</a>

        <?php if(!isset($_SESSION['siteusername'])) { ?>
            <span class="user-actions-header">
                <a href="/old/create_account" class="www-header-links">Create Account</a> <span class="www-seperator">|</span> <a href="/old/sign_in" class="www-header-links">Sign in</a>
            </span>
        <?php } else { ?>
            <span class="user-actions-header">
                <?php echo htmlspecialchars($_SESSION['siteusername']); ?> 
                <img src="/dynamic/pfp/<?php echo $_user_fetch_utils->fetch_user_pfp($_SESSION['siteusername']); ?>" class="profile_pic_mini">
            </span>
        <?php } ?>
    </form> 
</div>
<?php 
    if(isset($_SESSION['siteusername']))
        $_base_utils->update_login_time($_SESSION['siteusername']); 
?>