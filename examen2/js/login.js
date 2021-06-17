var username = 'alejandro';
var password = '12345';
$("#boton").click(function() {
    var user = $("#username").val();
    var pass = $("#password").val();
    if (user == username && pass == password) {
        sessionStorage.setItem('user', user);
        window.location = 'index.html';
    } else {
        window.location = 'login.html';
    }

});