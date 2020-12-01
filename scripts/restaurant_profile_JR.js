function getRestaurantProfile() {

    //Parse the URL to get the restaurant doc ID by searching for the "?" and splitting it
    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?");
    var restID = queries[1]; //grab the restaurant doc's ID after "?" and make it a variable
    console.log(restID);

    //Use the 'restID' to get the specific restaurant doc
    db.collection("Restaurants")
        //once we have the restaurant's document, we need to 'get' it and then read it using 'then'
        .doc(restID)
        .get()
        .then(function (doc) {
            console.log(doc.data());
            var name = doc.data().Name;
            var address = doc.data().Address;
            var hours = doc.data().Business_hours;
            var count = doc.data().Count;
            var masks = doc.data().Masks_required;
            var id = doc.id; //The restaurant's doc ID
            var image = doc.data().Image;

            //d1 is the div container with class = "card"
            var d1 = $('#card-container').append('<div class="card" id="inside-card" style="width: 25rem;">');
            var imgdiv = $('.card').append('<div id="img-container">');
            var i = $('#img-container').append('<img class="card-img-top" src="/images/' + image + '" alt="Card image cap">');
            var d2 = d1.append('<div class="card-body">');
            d2.append('<h5 class="card-title">' + name +
                '<i id="' + id + '" class="fa heart fa-heart-o"></i>' + '</h5>'); //add heart class from font-awesome
            d2.append('<p class="card-text"> Address: ' + address + '</p>');
            d2.append('<p class="card-text"> Hours of Operation: ' + hours + '</p>');
            d2.append('<p class="card-text"> People currently inside the restaurant: ' + count + '</p>');
            d2.append('<p class="card-text"> Masks required: ' + masks + '</p>');
            d2.append('<a class="btn btn-warning" href="review.html" role="button">Click to read some reviews!</a>')

            // When the heart is clicked
            $("#" + id).click(function () { //add listener

                //Toggle between the full-heart ("fa-heart"), and the empty-heart (fa-heart-o)
                $(this).toggleClass("fa-heart fa-heart-o");

                //If the "fa-heart" class is here, then add to faves, else remove from faves
                if ($("#" + id).hasClass('fa-heart')) {
                    console.log("ON");
                    //save to database
                    firebase.auth().onAuthStateChanged(function (user) {
                        db.collection("user").doc(user.uid).update({
                            faves: firebase.firestore.FieldValue.arrayUnion(name)
                        })
                    })
                } else {
                    console.log("OFF");
                    //Remove from database
                    firebase.auth().onAuthStateChanged(function (user) {
                        db.collection("user").doc(user.uid).update({
                            faves: firebase.firestore.FieldValue.arrayRemove(name)
                        })
                    })
                }
            })

        })
}




getRestaurantProfile();