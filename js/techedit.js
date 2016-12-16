/* global firebase $ */
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        $("#nav-login").addClass("hidden");
        $("#nav-collection").removeClass("hidden");
        $("#nav-logout-link").click(function() {
            window.location.href = "/account/logout/?redir=" + encodeURIComponent(window.location.href);
        });
        $("#nav-logout").removeClass("hidden");
        
    }
    else {
        $("#nav-collections").addClass("hidden");
        $("#nav-logout").addClass("hidden");
        $("#nav-login-link").click(function() {
            window.location.href = "/account/login/?redir=" + encodeURIComponent(window.location.href);
        });
        $("#nav-login").removeClass("hidden");
    }
});
