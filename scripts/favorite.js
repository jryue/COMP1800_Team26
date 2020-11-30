function getFavoriteList() {
    db.collection("user")
    .doc(user.uid)
    .get()
    .then(function(doc) {
        console.log(doc.data());
        var fave = doc.data().faves;

        var d1 = $("#fav-list").append(
            "<h3> Your favorite restuarants are: </h3>" +
            "<ul>" +
            "<li>" + fave + "</li>" +
            "</ul>");

    })
}