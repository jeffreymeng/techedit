/* global firebase $ */
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        $("#nav-login").addClass("hidden");
        $("#nav-collections").removeClass("hidden");
        $("#nav-logout-link").click(function() {
            window.location.href = "/account/logout/?redir=" + encodeURIComponent(window.location.href);
        });
        $("#nav-logout").removeClass("hidden");
        
    }
    else {
        $("#nav-logout").addClass("hidden");
        $("#nav-login-link").click(function() {
            window.location.href = "/account/login/?redir=" + encodeURIComponent(window.location.href);
        });
        $("#nav-login").removeClass("hidden");
    }
});
