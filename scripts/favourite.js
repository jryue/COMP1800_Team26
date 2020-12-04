function getFav(doc) {
    var userId = localStorage.getItem("signedInUserID");
    db.collection('user').doc(userId).get().then(function (doc) {
        // Read "faves" from user database 
        let fav = doc.data().faves;

        // favList will create div with card class
        let favList = document.createElement("div");
        let userFav = document.createElement("p");
        favList.setAttribute("class", "card-body");
        userFav.innerText = fav;
        favList.appendChild(userFav);

        $(".content").append(favList);
    })
}

getFav();