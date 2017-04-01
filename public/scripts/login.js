$(document).ready(function(){
    $('.slider').slider({
        full_width: true,
        interval: 2200,
        transition: 1000,
    });

    $("#register-trigger").click(function(){
        $("#register-form-wrapper").show();
        $("#login-form-wrapper").hide();
    });

    $("#login-trigger").click(function(){
        $("#register-form-wrapper").hide();
        $("#login-form-wrapper").show();
    });

    // post request for register
    $("#register").on('submit', function(){
        console.log("reg submit");
        var username = $("#reg-username").val();
        var company_name = $("#reg-company-name").val();
        var password = $("#reg-password").val();

        console.log(username + " " + company_name + " " + password);


        $.ajax({
            url: '/user',
            type:"POST",
            data: {
                username: username,
                company_name: company_name,
                password: password
            },
            headers: {
                'Accept': 'application/json;',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType:"json",
            success: function(response){
                console.log(response);
            }

        });


        $("#reg-username").val("");
        $("#reg-company-name").val("");
        $("#reg-password").val("");

    });

    // post request for login
    $("#login").on('submit', function(){
        console.log("login submit");
        var username = $("#log-username").val();
        var password = $("#log-password").val();

        console.log(username + " " + password);

        $.ajax({
            url: '/user/login',
            type:"POST",
            data: {
                username: username,
                password: password
            },
            headers: {
                'Accept': 'application/json;',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType:"json",
            success: function(response){
                console.log(response);
                window.location.replace('/home');
            }

        });

        $("#log-username").val("");
        $("#log-password").val("");

    });

});
