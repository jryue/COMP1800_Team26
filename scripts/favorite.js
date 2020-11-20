//set variables
var rest_name = $(".card-title");
var fav_icon = $(".heart-icon");

$(document).ready(function() {
    fav_icon.on("click", function() {
        
        $("#fav-list").append("<div>"
            + "<p class='fav-list-p'>" + rest_name + "</p>"
            + "</div>");
    })
})

