function createGrid(Restaurants) {
    db.collection(Restaurants)
        .get()
        .then(function (snap) {
            console.log(snap.size);
            console.log("create new container grid");
            console.log("create new row");

            var message =
                "<div class='container'>" +
                "<div class='row'>";

            for (var i = 1; i <= snap.size; i++) {
                console.log(i);
                console.log("create a column and one card");
                var cid = "c" + i;
                //give each column an id
                message = message +
                    "<div class='col' id=" + cid + ">" +
                    "</div>"

                //Make one card per row
                if (i % 1) {
                    console.log("end the row")
                    console.log("create new row");
                    message = message +
                        "</div>" +
                        "<div class='row'>"
                }
            }
            console.log("end the row");
            console.log("end container grid");

            message = message +
                "</div>" +
                "</div>"

            $("#card-container").append(message);
        })
}
createGrid("Restaurants");

//----------------------------------------------------------------------
//  This function populates the slots identified by "c1", "c2" etc.
//  with a bootrap card with information from the collection.
//  Input param is name of the collection you want to display.
//----------------------------------------------------------------------
function fillCards(Restaurants) {
    db.collection(Restaurants)
        .get()
        .then(function (snap) {
            var i = 0;
            snap.forEach(function (doc) {
                console.log(doc.data());
                var name = doc.data().Name;
                var address = doc.data().Address;
                var hours = doc.data().Business_hours;
                var count = doc.data().Count;
                var masks = doc.data().Masks_required;
                //var name_no_space = name.replace(/\s+/g, '');
                var image = doc.data().Image;
                //name_no_space = name_no_space.concat('_profile.html');
                i = i + 1;
                var card = "#c" + i;
                console.log(card);

                var d1 = $(card).append(
                    "<div class='card'>" +
                    "<div class='card-body'>" +
                    "<img class='card-img-top' src='/images/" + image + "' alt='Restaurant's Picture'>" +
                    "<h5 class='card-title'>" + name + "</h5>" +
                    "<p class='card-text'> " + address + "</p>" +
                    "<p class='card-text'> Masks Required: " + masks + "</p>" +
                    "<p class='card-text'> People currently inside: " + count + "</p>" +
                    "<p class='card-text'> " + hours + "</p>" +
                    //Add the restaurant's doc ID to the end of the restaurant profile page
                    "<a href='restaurant_profile.html?" + doc.id + "' class='btn btn-primary'>Go</a>" +
                    "</div>" +
                    "</div)");
            })
        })
}
fillCards("Restaurants");