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

});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 14.5995, lng: 120.9842},
        zoom: 8
    });
}
