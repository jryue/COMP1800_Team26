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
                
                if (!(i % 3)) {
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
                var name_no_space = name.replace(/\s+/g, '');
                //get name of image file from firebase
                var image = doc.data().Image;
                name_no_space = name_no_space.concat('_profile.html');
                i = i + 1;
                var card = "#c" + i;
                console.log(card);
                
                var d1 = $(card).append(
                    "<div class='card'>" +
                    "<div class='card-body'>" +
                    "<img class='card-img-top' src='./images/'" + image + "' alt='Card image cap'>" +
                    "<h5 class='card-title'>" + name + "</h5>" +
                    "<p class='card-text'> " + address + "</p>" +
                    "<p class='card-text'> Masks Required: " + masks + "</p>" +
                    "<p class='card-text'> People currently inside: " + count + "</p>" +
                    "<p class='card-text'> " + hours + "</p>" +
                    "<a href='" + name_no_space + "' class='btn btn-primary'>Go</a>" +
                    "<div class='ratings'>" +
                        '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />' +
                        '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />' +
                        '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />' +
                        '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />' +
                        '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />' +
                    "</div)" +
                    "</div>" +
                    "</div)");
            })
        })
}
fillCards("Restaurants");