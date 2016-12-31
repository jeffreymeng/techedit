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
        
        $("#nav-collection").addClass("hidden");
        $("#nav-logout").addClass("hidden");
        $("#nav-login-link").click(function() {
            if (window.location.pathname !== "/account/logout/" || window.location.pathname !== "/account/logout/index.html" || window.location.pathname !== "/account/login/" || window.location.pathname !== "/account/login/index.html") {
                window.location.href = "/account/login/?redir=" + encodeURIComponent(window.location.href);
            } else {
                window.location.href = "/account/login/";
            }
        });
        $("#nav-login").removeClass("hidden");
    }
});
