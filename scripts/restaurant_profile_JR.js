function getRestaurantProfile() {

    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?");
    var restID = queries[1]; //grab the contents after "?"
    console.log(restID);

    db.collection("Restaurants")
        .doc(restID)
        .then(function (snap) {
            snap.forEach(function (doc) {
                console.log(doc.data());
                var name = doc.data().Name;
                var address = doc.data().Address;
                var hours = doc.data().Business_hours;
                var count = doc.data().Count;
                var masks = doc.data().Masks_required;
                var id = doc.id; //need to make a faves array
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

                var ratings = d1.append("<div class='ratings'>");
                var star1 = ratings.add('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path1 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');
                var star2 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path2 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');
                var star3 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path3 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');
                var star4 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path4 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');
                var star5 = ratings.append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">');
                var path5 = ratings.append('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />');

                // When the heart is clicked
                $("#" + id).click(function () { //add listener

                    //Toggle between the full-heart ("fa-heart"), and the empty-heart (fa-heart-o)
                    $(this).toggleClass("fa-heart fa-heart-o");

                    //If the "fa-heart" class is here, then add to faves, else remove from faves
                    if ($("#" + id).hasClass('fa-heart')) {
                        console.log("ON");
                        //save to database
                        firebase.auth().onAuthStateChanged(function (user) {
                            db.collection("users").doc(user.uid).update({
                                faves: firebase.firestore.FieldValue.arrayUnion(id)
                            })
                        })
                    } else {
                        console.log("OFF");
                        //Remove from database
                        firebase.auth().onAuthStateChanged(function (user) {
                            db.collection("users").doc(user.uid).update({
                                faves: firebase.firestore.FieldValue.arrayRemove(id)
                            })
                        })
                    }
                })

            })
        })

}


getRestaurantProfile();