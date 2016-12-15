/* global firebase $ */
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        $("#nav-logout-link").click(function() {
            window.location.href = "/account/logout/?redir=" + encodeURIComponent(window.location.href);
        });
        $("#nav-logout").removeClass("hidden");
        
    }
    else {
        $("#nav-login-link").click(function() {
            window.location.href = "/account/login/?redir=" + encodeURIComponent(window.location.href);
        });
        $("#nav-login").removeClass("hidden");
    }
});
