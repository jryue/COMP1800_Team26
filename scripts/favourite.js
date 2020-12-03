function getFav(doc) {
    var userId = localStorage.getItem("signedInUserID");
    db.collection('user').doc(userId).get().then(function (doc) {
        let fav = doc.data().faves;
        let favList = document.createElement("div");
        favList.setAttribute("class", "card");
        favList.innerText = fav;
        $(".content").append(favList);
    })
}

getFav();