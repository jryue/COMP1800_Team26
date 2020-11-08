function getRestaurantInfoToCards() {
    db.collection("Restaurants")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var m = doc.data().message;
                console.log(m);
                var d1 = $("#Restaurant02").append("<div class='daeji' style='width: 18rem'");
                var i = d1.append("<img src='...' class='card-img-top' alt='...'>")
                var d2 = d1.append("<div class='card-body'>")
                d2.append("<h5 class='card-title'>"+m+"</h5>");
                d2.append("<p class='card-text'>Based in Vancouver, BC, Canada, Dae-ji restaurant</p>");
                d2.append("<a href='#' class='btn btn-primary'> Link to something</a>");
            })
        })
}

getRestaurantInfoToCards();