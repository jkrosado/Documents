<?php if(isset($_SESSION['guideonlysubs'])) {
        unset($_SESSION['guideonlysubs']);
        header("Location: /2013/account_settings");
    } else {
        $_SESSION['guideonlysubs'] = true;
        header("Location: /2013/account_settings");
    }
?>