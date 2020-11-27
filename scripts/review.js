function getReview() {
    db.collection("Restaurants")
        .where("Name", "==", "Dae-Ji")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                console.log(doc.data());
                var name = doc.data().Name;
                var address = doc.data().Address;

                var restaurantName = $('.restuarnt-name').append(name);
                var restaurantAddress = $('.restaurant-address').append(address);
            })
        })
}

getReview();

function getRestaurantImage() {
    db.collection("image")
        .doc("pic")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var img = doc.data().img_url;
            })
        })
}

getRestaurantImage;