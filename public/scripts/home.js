$(document).ready(function(){

    $(".dropdown-button").dropdown({ hover: false });
    $('.modal').modal();

    $("#add-promo-form").on('submit', function(e){
        e.preventDefault();

        var name = $("#promo-name").val();
        var desc = $("#promo-desc").val();
        var slot = $("#promo-slots").val();
        var address = $("#promo-add").val();
        var longitude = 0;
        var latitude = 0;
        var customer_availed = [];
        var customer_declined = [];
        var customer_sent = [];
        var image = "fake_image";
        var keywords =  [];
        var deleted = false;

        var map_url = "https://maps.googleapis.com/maps/api/geocode/json?address="
        var ads = address.split(" ").join("+");
        var key = "&key=AIzaSyCDWSbrVdCcnyiXm494BdpHi0nOIY6P-Mc";

        var url = map_url+ads+key;
        console.log(map_url+ads+key);

        $.get(url, function(data){
            var location = data.results[0].geometry.location;
            longitude = location.lng;
            latitude = location.lat;
            console.log(longitude);
            console.log(latitude);


            $.ajax({
                url: '/promo',
                type:"POST",
                data: {
                    name : name,
                    desc : desc,
                    slot : slot,
                    address : address,
                    longitude : longitude,
                    latitude : latitude,
                    customer_availed : customer_availed,
                    customer_declined : customer_declined,
                    customer_sent : customer_sent,
                    image : image,
                    keywords :  keywords,
                    deleted : deleted
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


        });

        $("#promo-name").val("");
        $("#promo-desc").val("");
        $("#promo-slots").val("");
        $("#promo-add").val("");

        // window.location.replace("/home");
    });

    $("#edit-promo-form").on('submit', function(){
        console.log("gege");

        var name = $("#promo-name").val();
        var desc = $("#promo-desc").val();
        var slot = $("#promo-slots").val();
        var address = $("#promo-add").val();


        $.post('/', {
            name : name,
            desc : desc,
            slot : slot,
            address : address,
        });

        console.log(name + " " + desc + " " + slot + " " + address);

        $("#promo-name").val("");
        $("#promo-desc").val("");
        $("#promo-slots").val("");
        $("#promo-add").val("");

        window.location.replace("/home");

    });


});
