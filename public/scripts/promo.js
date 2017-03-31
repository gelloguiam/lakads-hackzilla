$(document).ready(function(){
    $.get( "/promo", function( data ) {

        var promos = data;
        var body;

        promos.forEach(function(promo){
            body =  "<div class='col s4'>" +
                        "<div class='card'>" +
                        "<div class='card-content'>";

            body += "<span class='card-title promo-name'>" + promo.name + "</span>";
            body += "<p>"+ promo.desc +"</p>";
            body += "<p>"+ promo.slot +"</p>";
            body += "<p>"+ promo.address +"</p>";
            body += "</div>";
            body += "<div class='card-action promo-command'>" +
                    "<a href='#edit-promo-form'><i class='material-icons'>mode_edit</i></a>" +
                    "<a href='#'><i class='material-icons'>delete</i></a></div></div>";

            $('#promo-wrapper').append(body);
            body = "";
        });

    });
});
